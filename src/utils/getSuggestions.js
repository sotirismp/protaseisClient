export const getSuggections = async () => {
  try {
    const response = await fetch(
      "https://protaseis.balas.dev/getSuggestions?limit=8"
    );
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (e) {
    return null;
  }
};
