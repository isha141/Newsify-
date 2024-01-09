import React, { Component } from "react";

export class News extends React.Component {  
  render() {
  let {title,desc,UrltoImg}=this.props;
    return ( 
      <div className="container my-2">
        <div className="card" style={{width: "18rem"}}>
          <img src="https://ichef.bbci.co.uk/news/1024/branded_news/80F9/production/_132171033_gettyimages-1413330959-1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text"> 
            <h5 className="Card Title">{title}</h5>
            <h5 className="Card-text">{desc}</h5>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
