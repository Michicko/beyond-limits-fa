export const getDefaultSeason = (seasons: { id: string; season: string }[]) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const defaultSeason = seasons.find((el) =>
    el.season.includes(String(currentYear))
  )?.season;
  return defaultSeason || currentYear - 1 + "/" + currentYear;
};
