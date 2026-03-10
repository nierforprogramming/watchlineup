import { create } from "zustand";
import { media } from "@/data/media";
import { getTMDBDetailsById, formatTMDBDetails } from "@/lib/tmdb";
import { getTodayDayName } from "@/lib/utils";
import { lineup } from "@/data/lineup";

function createTMDBCacheKey(tmdbId, mediaType) {
  return `${mediaType}-${tmdbId}`;
}

function isEntryScheduledForDay(entry, day) {
  return entry.days.includes(day);
}

export const useLineUpStore = create((set, get) => ({
  today: getTodayDayName(),
  items: [],
  featuredItems: [],
  loading: false,
  error: null,
  detailsCache: {},

  refreshToday: async () => {
    const today = getTodayDayName();

    set({ today });
    await get().fetchLineup();
  },

  fetchLineup: async () => {
    const today = get().today;
    const currentCache = get().detailsCache;

    set({
      loading: true,
      error: null,
    });

    try {
      const todayEntries = lineup.filter((entry) =>
        isEntryScheduledForDay(entry, today),
      );

      const uniqueWeeklyMediaIds = lineup.map((entry) => entry.mediaId);

      const cachePatch = {};

      const getEnrichedMediaData = async (mediaItem) => {
        const cacheKey = createTMDBCacheKey(
          mediaItem.tmdbId,
          mediaItem.mediaType,
        );

        let tmdbData = currentCache[cacheKey];

        if (!tmdbData) {
          const details = await getTMDBDetailsById(
            mediaItem.tmdbId,
            mediaItem.mediaType,
          );

          tmdbData = formatTMDBDetails(details, mediaItem.mediaType);
          cachePatch[cacheKey] = tmdbData;
        }

        return tmdbData;
      };

      const items = await Promise.all(
        todayEntries.map(async (entry) => {
          const mediaItem = media.find((item) => item.id === entry.mediaId);

          if (!mediaItem) {
            return {
              ...entry,
              media: null,
              tmdb: null,
              status: "media_not_found",
            };
          }

          const tmdbData = await getEnrichedMediaData(mediaItem);

          return {
            ...entry,
            media: mediaItem,
            tmdb: tmdbData,
            status: "ready",
          };
        }),
      );

      const featuredItems = await Promise.all(
        uniqueWeeklyMediaIds.map(async (mediaId) => {
          const mediaItem = media.find((item) => item.id === mediaId);

          if (!mediaItem) {
            return null;
          }

          const tmdbData = await getEnrichedMediaData(mediaItem);

          return {
            media: mediaItem,
            tmdb: tmdbData,
          };
        }),
      );

      set((state) => ({
        items: items.filter(Boolean),
        featuredItems: featuredItems.filter(Boolean),
        loading: false,
        error: null,
        detailsCache: {
          ...state.detailsCache,
          ...cachePatch,
        },
      }));
    } catch (error) {
      set({
        items: [],
        featuredItems: [],
        loading: false,
        error: error.message || "Failed to load lineup",
      });
    }
  },
}));
