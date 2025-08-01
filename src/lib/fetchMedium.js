import striptags from "striptags";

export async function fetchMediumArticles() {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@itzKashan"
    );
    const data = await response.json();

    return data.items.map((item) => {
      const content = item.content || "";

      // Extract the first image from content
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      const image = imgMatch ? imgMatch[1] : null;

      // Remove <figure>...</figure> from content
      const contentWithoutFigure = content.replace(/<figure>.*?<\/figure>/s, "");

      // Strip tags from the rest of content and truncate
      const cleanText = striptags(contentWithoutFigure).trim().substring(0, 300) + "...";

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        image,
        categories: item.categories,
        content: cleanText,
      };
    });
  } catch (error) {
    console.error("❌ Failed to fetch Medium articles:", error.message);
    return [];
  }
}
