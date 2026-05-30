export const capitalizeWords = (value: string): string => {
  return value
    .trim()
    .split(/\s+/)
    .map((word) => {
      if (word.length === 2) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};
