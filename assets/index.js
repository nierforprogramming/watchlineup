export const sectionLinks = [
  {
    name: "Home",
    path: "#home",
  },

  {
    name: "Today's Lineup",
    path: "#lineup",
  },
  {
    name: "Section 2",
    path: "#section-two",
  },
  {
    name: "Next On Movies",
    path: "#nextonmovies",
  },
];

const entertainmentCategories = [
  {
    name: "TV Show",
  },

  { name: "Movie" },
];
export const lineUpCategories = [
  { name: "Watch Streak", color: "bg-emerald-500/20 text-emerald-400" },
  { name: "BuzzWatch", color: "bg-orange-500/20 text-orange-400" },
  { name: "ScreenTime Saturday", color: "bg-rose-500/20 text-rose-400" },
  { name: "Weekend Watchout", color: "bg-teal-500/20 text-teal-400" },
  { name: "WakeUp Watch", color: "bg-sky-500/20 text-sky-400" },
  { name: "Mind Snack", color: "bg-purple-500/20 text-purple-300" },
  { name: "Evening Flix", color: "bg-indigo-500/20 text-indigo-400" },
  { name: "ZzzToons", color: "bg-purple-700/20 text-purple-400" },
  { name: "Prime Show", color: "bg-yellow-500/20 text-yellow-400" },
  { name: "Episode-A-Day", color: "bg-green-400/20 text-green-300" },
  { name: "Snacks & Toons", color: "bg-orange-300/20 text-orange-300" },
];

export const lineup = [
  {
    name: "The Legend of Vox Machina",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Watch Streak",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Fallout",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Episode-A-Day",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Kiff",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Snacks & Toons",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "The Amazing World of Gumball",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Mind Snack",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "Pokemon",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "Prime Show",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },

  {
    name: "We Baby Bears",
    lineUpCategory: {
      ...lineUpCategories.find(
        (lineUpCategory) => lineUpCategory.name === "ZzzToons",
      ),
    },
    entertainmentCategory: { ...entertainmentCategories[0] },
  },
];

export const data = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/mhZAT8ktiNi7YwuL50kmumsau69.jpg",
      id: 254953,
      name: "Rooster",
      original_name: "Rooster",
      overview:
        "On a college campus, an author navigates a complicated relationship with his daughter.",
      poster_path: "/aikvD4Nu7N6ekbrXNua8vJlO8JU.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [35],
      popularity: 7.2485,
      first_air_date: "2026-03-08",
      vote_average: 8.2,
      vote_count: 5,
      origin_country: ["US"],
    },
    {
      adult: false,
      backdrop_path: "/xBCqa89aObojLlXu6MuGgnAmhcP.jpg",
      id: 313298,
      name: "The Dinosaurs",
      original_name: "The Dinosaurs",
      overview:
        "From the first dinosaurs to the last, this epic documentary series examines their 165 million years on Earth and the forces that shaped their evolution.",
      poster_path: "/x37IK9WWhuzi7tgyMT4ff3kiT5X.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [99],
      popularity: 54.7436,
      first_air_date: "2026-03-06",
      vote_average: 7.4,
      vote_count: 25,
      origin_country: ["GB", "US"],
    },
    {
      adult: false,
      backdrop_path: "/8mmDLb108DoFZlE8sfc64TRqLvm.jpg",
      id: 255661,
      name: "Young Sherlock",
      original_name: "Young Sherlock",
      overview:
        "Sherlock Holmes is a disgraced young man when he finds himself wrapped up in a murder case that threatens his liberty.",
      poster_path: "/BMBWTgvL41sOYtfkmXen6nm9mG.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [10759, 9648],
      popularity: 195.5128,
      first_air_date: "2026-03-04",
      vote_average: 8.246,
      vote_count: 64,
      origin_country: ["GB", "US"],
    },
    {
      adult: false,
      backdrop_path: "/sjOTFlGapgXFjwV3LmD9eHZEp3d.jpg",
      id: 281016,
      name: "Boyfriend on Demand",
      original_name: "월간남친",
      overview:
        "Seo Mi-rae is worn out by work. Love? It's the last thing on her mind. But a virtual dating service sparks feelings.",
      poster_path: "/k2PClFqMQWxubkQpCxiQE5xyBZi.jpg",
      media_type: "tv",
      original_language: "ko",
      genre_ids: [35, 10765, 18],
      popularity: 117.9289,
      first_air_date: "2026-03-06",
      vote_average: 8.8,
      vote_count: 25,
      origin_country: ["KR"],
    },
    {
      adult: false,
      backdrop_path: "/pJert4hRVNzagvtFr3vTYnpgBMH.jpg",
      id: 310935,
      name: "Girl from Nowhere: The Reset",
      original_name: "เด็กใหม่ The Reset",
      overview:
        "In a new universe, the mysterious Nanno poses as a transfer student, exposing cruelty.",
      poster_path: "/bRMEjZHvES9XLKSFVCtveFGdOHC.jpg",
      media_type: "tv",
      original_language: "th",
      genre_ids: [18, 9648],
      popularity: 34.2589,
      first_air_date: "2026-03-04",
      vote_average: 9.5,
      vote_count: 4,
      origin_country: ["TH"],
    },
    {
      adult: false,
      backdrop_path: "/qD211Hb5XwFxrszzBBe5EUYJerh.jpg",
      id: 111110,
      name: "ONE PIECE",
      original_name: "ONE PIECE",
      overview:
        "With his straw hat and ragtag crew, young pirate Monkey D. Luffy goes on an epic voyage for treasure.",
      poster_path: "/rVX05xRKS5JhEYQFObCi4lAnZT4.jpg",
      media_type: "tv",
      original_language: "en",
      genre_ids: [10759, 10765],
      popularity: 54.6249,
      first_air_date: "2023-08-31",
      vote_average: 8.1,
      vote_count: 1495,
      origin_country: ["US"],
    },
  ],
  total_pages: 500,
  total_results: 10000,
};
