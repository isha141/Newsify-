import React, { Component } from "react";
import Spinner from "./Spin";
import PropTypes from 'prop-types'
export class Business extends Component { 

  static defaultProps = {
    country: 'in',
    pageSize:5
  }
  // static PropTypes={
  //   country: PropTypes.string,
  //   pageSize:PropTypes.number
  // } 
  // let {title,desc,urltoImg}=this.props;
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?category=business&apiKey=02d4107f2c1044f6a205773012c28c38&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,
      loading:false
     });
    //  return data;
  }
  constructor() {
    super();
    console.log("Happy New Year  :) ");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
    // this.handleClick = this.handleClick.bind(this);
  }
handlePreviousClick= async ()=>{
    // console.log("I am Upcoming Software Engineer at google") 
    let url =
          `https://newsapi.org/v2/top-headlines?category=business&apiKey=02d4107f2c1044f6a205773012c28c38&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;

    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
    page: this.state.page-1,
    articles: parsedData.articles,
    loading: false
    })

}
handleNextClick=async ()=>{
  //  console.log("I am Upcoming Software Engineer at google")
  
    let url =
      `https://newsapi.org/v2/top-headlines?category=businessapiKey=02d4107f2c1044f6a205773012c28c38&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
     let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
    page: this.state.page+1,
    articles: parsedData.articles,
    loading: false
    })
    // this.setState({
    // page: this.state.page+1,
    // articles: parsedData.articles
    // })
    // this.setState({  });
    
}
  render() {
    // let { title, desc, UrltoImg } = this.props;
    return ( 
      <div className="container">
      <div className="row mx-auto">
      {this.state.loading && <Spinner></Spinner>}
        {!this.state.loading && this.state.articles.map((element) => {
          return (
            <div
              className="card mx-auto mt-3"
              style={{ width: "18rem" }}
              key={element.url}
            >
              <img
                src={element.urlToImage}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body ml-4">
                <p className="card-text">
                  <h5 className="Card Title">{element.title?element.title.slice(0, 40): ""}</h5>
                  {/* <h5 className="Card-text">{element.description}</h5> */}
                  {element.content?element.content.slice(0, 88): ""}
                </p>
              </div>
              <a href={element.url}  target="_blank" className="btn btn-primary mb-3" on>
                Read More{" "}
              </a>
            </div>
          );
        })}
        <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePreviousClick}> Previous </button>
              <button disabled={this.state.page>=23}type="button" className="btn btn-secondary" onClick={this.handleNextClick}> Next </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Business;
