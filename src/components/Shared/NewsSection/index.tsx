import Link from 'next/link';
import { useEffect, useState } from 'react';
import NewsCard from '../NewsCard/index';
import FilterList from './FilterList';

type Props = {
  title: string;
  subTitle: string;
  displayAll?: boolean;
};
const NewsSection = ({ title, subTitle, displayAll }: Props) => {
  const [newsError, setNewsError] = useState(null);
  const [isNewsLoaded, setIsNewsLoaded] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [totalNewsNum, setTotalNewsNum] = useState(0);

  const [categories, setcategories] = useState([]);

  useEffect(() => {
    fetch(`https://api.npoint.io/d275425a434e02acf2f7/News`)
      .then(res => res.json())
      .then(
        result => {
          setIsNewsLoaded(true);
          const sortDate = result.sort(
            (a, b) => Number(new Date(b.publishedDate)) - Number(new Date(a.publishedDate))
          );

          const data = sortDate.filter(news => news.showOnHomepage === 'yes').slice(0, 6);

          setNewsItems(displayAll ? result : data);
          setTotalNewsNum(result.length);
          setFilteredNews(displayAll ? result : data);
        },
        error => {
          setIsNewsLoaded(true);
          setNewsError(error);
        }
      );
  }, [displayAll]);

  const handleDisplayAll = () => {
    setFilteredNews(newsItems);
    setSelectedCategory(0);
  };

  const handleFilterNews = categoryId => {
    const newNews = newsItems.filter(singleNews => {
      return singleNews.categoryID == categoryId;
      // comparing category for displaying data
    });
    setSelectedCategory(categoryId);
    setFilteredNews(newNews);
  };

  return (
    <section id="newsSection" className="section">
      <div className="container">
        <div className="circle-wrapper">
          {[...Array(5)].map((e, i) => (
            <div key={i} className="circle"></div>
          ))}
        </div>
        <h6 className="sub-title">{subTitle}</h6>
        <h1 className="main-title">{title}</h1>

        <FilterList
          onClickFilter={handleFilterNews}
          onDisplayAll={handleDisplayAll}
          selectedCategory={selectedCategory}
          categories={categories}
          setcategories={setcategories}
        />

        <div className="news-wrapper">
          {newsError && <p className="alert"> Something Wrong Happend, sorry cannot get News </p>}
          {!isNewsLoaded && !newsError && <p className="alert"> Loading ... </p>}
          {filteredNews.length === 0 && !newsError && <p className="alert"> No News to Display</p>}
          {filteredNews.map(news => {
            return (
              <div key={news.id} className="single-news">
                <NewsCard
                  title={news.title}
                  image={news.urlToImage}
                  date={news.publishedDate}
                  categoryID={news.id}
                  categories={categories}
                />
              </div>
            );
          })}
        </div>
      </div>
      {totalNewsNum > 6 && !displayAll && (
        <div className="more-btn">
          <Link href="/news">View All News </Link>
        </div>
      )}
    </section>
  );
};

export default NewsSection;
