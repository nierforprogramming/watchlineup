import { create } from "zustand";
import { media } from "@/data/media";
import { lineup } from "@/data/lineup";
import { getTMDBDetailsById, formatTMDBDetails } from "@/lib/tmdb";
import { getTodayDayName } from "@/lib/utils";

function createTMDBCacheKey(tmdbId, mediaType) {
  return `${mediaType}-${tmdbId}`;
}

function isScheduledForDay(entry, day) {
  return entry.days.includes(day);
}

export const useLineUpStore = create((set, get) => ({
  today: getTodayDayName(),

  weeklyItems: [],
  todayItems: [],
  featuredItems: [],
  saturdayMovies: [],

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
      const cachePatch = {};

      const enrichMediaItem = async (mediaItem) => {
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

      // enrich lineup
      const weeklyItems = await Promise.all(
        lineup.map(async (entry) => {
          const mediaItem = media.find((item) => item.id === entry.mediaId);

          if (!mediaItem) return null;

          const tmdbData = await enrichMediaItem(mediaItem);

          return {
            ...entry,
            media: mediaItem,
            tmdb: tmdbData,
          };
        }),
      );

      const cleanWeeklyItems = weeklyItems.filter(Boolean);

      // today's lineup
      const todayItems = cleanWeeklyItems.filter((item) =>
        isScheduledForDay(item, today),
      );

      const tvItems = cleanWeeklyItems.filter(
        (item) => item.media?.mediaType === "tv",
      );

      const movieItems = cleanWeeklyItems.filter(
        (item) => item.media?.mediaType === "movie",
      );

      // hero items (unique)
      const featuredItems = [
        ...new Map(tvItems.map((item) => [item.media.id, item])).values(),
      ];

      // saturday movies
      const saturdayMovies = movieItems.filter((item) =>
        isScheduledForDay(item, "Saturday"),
      );

      set((state) => ({
        weeklyItems: cleanWeeklyItems,
        todayItems,
        featuredItems,
        saturdayMovies,

        loading: false,
        error: null,

        detailsCache: {
          ...state.detailsCache,
          ...cachePatch,
        },
      }));
    } catch (error) {
      set({
        weeklyItems: [],
        todayItems: [],
        featuredItems: [],
        saturdayMovies: [],
        loading: false,
        error: error.message || "Failed to load lineup",
      });
    }
  },
}));
