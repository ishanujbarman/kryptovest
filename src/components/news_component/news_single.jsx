import React from 'react'
import "./news.css";

const News_single = ({item}) => {
  const demoImage =
    "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";
  return (
    <div className="news_single">
      <img
        src={item?.image?.thumbnail?.contentUrl || demoImage}
        alt=""
        className="news_logo"
      />
      <div className="news_content">
        <h3>{item.name}</h3>
        <p>
          {item.description.length > 100
            ? `${item.description.substring(0, 100)}...`
            : item.description}
        </p>
        <a href={item.url}>view more</a>
      </div>
    </div>
  );
}

export default News_single