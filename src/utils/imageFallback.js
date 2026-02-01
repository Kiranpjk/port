// Utility function to generate fallback SVG for missing images
export const generateFallbackImage = (title) => {
  return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f0f0f0" width="400" height="300"/%3E%3Ctext fill="%23999" x="50%25" y="50%25" text-anchor="middle" dominant-baseline="middle" font-family="Arial" font-size="18"%3E${encodeURIComponent(title)}%3C/text%3E%3C/svg%3E`;
};
