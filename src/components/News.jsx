import {useState,useEffect} from 'react'
import News_single from './news_component/news_single';
import Loader from "./Loader";

const axios = require("axios");

const News = () => {
  const [News_data, setNews] = useState([]);
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "Cryptocurrency",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      "X-RapidAPI-Key": "0a380338b6msh45b9632c0c16a90p121be8jsn64a565db6fbb",
    },
  };

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.request(options);
        console.log(res.data);
        setNews(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, []);


   if (!News_data?.value)
     return (
       <Loader/>
     );
  return (
    <div className="news_container">
      <h2>News</h2>
      <div className="news">
        {News_data.value.map((item) => (
          <News_single item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default News