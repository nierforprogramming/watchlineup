import { fetchAPI } from "./api";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/original";

function buildTMDBUrl(path, params = {}) {
  const searchParams = new URLSearchParams({
    api_key: TMDB_API_KEY,
    ...params,
  });

  return `${TMDB_BASE_URL}${path}?${searchParams.toString()}`;
}

export async function getTMDBDetailsById(tmdbId, mediaType) {
  const path = mediaType === "movie" ? `/movie/${tmdbId}` : `/tv/${tmdbId}`;
  const url = buildTMDBUrl(path);

  const result = await fetchAPI(url);

  if (!result.success) {
    throw new Error(result.error);
  }

  return result.data;
}

export function formatTMDBDetails(details, mediaType) {
  return {
    tmdbId: details.id,
    mediaType,
    title: mediaType === "movie" ? details.title : details.name,
    originalTitle:
      mediaType === "movie" ? details.original_title : details.original_name,
    overview: details.overview || "",
    posterPath: details.poster_path || null,
    backdropPath: details.backdrop_path || null,
    voteAverage: details.vote_average || 0,
    voteCount: details.vote_count || 0,
    genres: details.genres || [],
    releaseDate:
      mediaType === "movie" ? details.release_date : details.first_air_date,
  };
}

export function getTMDBImageUrl(path) {
  if (!path) return null;
  return `${TMDB_IMAGE_BASE}${path}`;
}
