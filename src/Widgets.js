import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
      <div className='widgets_articleLeft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widgets_article_right'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Testing it", "Top news-9099 readers")}
      {newsArticle("Corona", "Top news-866 readers")}
      {newsArticle("Tesla new car it", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoins breaks", "Crypto- 4000 readers")}
      {newsArticle("Testing it", "Top news-9099 readers")}
      {newsArticle("Testing it", "Top news-9099 readers")}
    </div>
  );
}

export default Widgets;
