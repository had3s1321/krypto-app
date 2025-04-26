export const setColor = (onPath: boolean, theme?: string) => {
  if (onPath) {
    if (theme === "dark") return "#ffffff";
    return "#353570";
  }
  if (!onPath) return "#808080";
  return "#353570";
};
