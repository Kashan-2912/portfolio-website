import Parser from 'rss-parser';
import striptags from 'striptags';

const parser = new Parser();

export async function fetchMediumArticles() {
  const feed = await parser.parseURL('https://medium.com/feed/@itzKashan');

  return feed.items.map(item => {
    const content = item['content:encoded'] || '';
    // Extract img src using regex
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    const image = imgMatch ? imgMatch[1] : null;

    return {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      image,
      categories: item.categories,
      content: striptags(content).substring(0, 300) + '...',
    };
  });
}
