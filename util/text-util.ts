export const truncateText = (text: string, maxLength: number = 255) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
