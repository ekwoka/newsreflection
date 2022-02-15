import { useEffect, useState } from 'preact/hooks';
import lunr from 'lunr';
import { getArticles } from '../../data/utils/getArticles';
import ArticlePreview from '../../components/article/ArticlePreview';

export default function Search({ query }) {
  const [articles, setArticles] = useState(null);
  const [index, setIndex] = useState(null);
  const [searchQ] = useState(query);

  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!articles || !articles.length) return;
    console.log('Indexing Articles');
    const idx = lunr(function () {
      this.field('title');
      this.field('body');
      this.ref('index');
      articles.forEach((article, index) => {
        const title = article.details.title;
        const body = article.body;
        this.add({ title, body, index });
      });
    });
    console.log('indexed');
    setIndex(idx);
  }, [articles]);

  useEffect(() => {
    async function fetchData() {
      console.log('Getting Article Data');
      const articles = await getArticles();
      if (articles.e) return console.log(articles.e);
      console.log(articles.data[0]);
      setArticles(articles.data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log(searchQ);
    if (!searchQ || !index) return;
    console.log('Performing search...');
    const results = index.search(searchQ);
    console.log(results);
    setResults(results);
  }, [searchQ, index]);

  if (!results?.length) return;

  return (
    <section class="prose mx-auto flex w-full max-w-prose flex-col gap-y-8 divide-y-2">
      {results.map((res, i) => {
        const article = articles[res.ref];
        return (
          <ArticlePreview
            details={article.details}
            preview={article.preview}
            key={i}
          />
        );
      })}
    </section>
  );
}
