import { data } from "@/assets";
import { create } from "zustand";

export const useMoviesAndTVShowsStore = create(() => ({
  data,
}));
