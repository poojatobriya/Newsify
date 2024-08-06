import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category, page }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?page=${page}&pageSize=9&country=us&category=${category}&apiKey=c09d08228ec8494db258e9929cce89f8`);
        const data = await response.json();
        if (response.ok) {
          setArticles(data.articles);
          setError(null);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError('Failed to fetch news articles');
      }
    };

    fetchArticles();
  }, [category, page]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <p className="text-center text-danger">{error}</p>
      ) : (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      )}
    </div>
  );
};

export default Newsboard;

