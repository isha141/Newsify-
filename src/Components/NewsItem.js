import React, { Component , useRef } from "react";
import Spinner from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
export class NewsItem extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 5,
    category: "general",
  };
  // static PropTypes={
  //   country: PropTypes.string,
  //   pageSize:PropTypes.number
  // }
  // let {title,desc,urltoImg}=this.props;
  articles = [];
  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8db4583ceaa6402c9bfc073f87bcb277&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.props.setProgress(60);
    this.setState({ articles: parsedData.articles, loading: false });
    //  return data;
    this.props.setProgress(100);
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    this.props.setProgress(0);
    console.log("Happy New Year  :) ");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      category: this.category,
      totalResults: 0,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )}: Newsify`;
    this.props.setProgress(100);
  }
  handlePreviousClick = async () => {
    // console.log("I am Upcoming Software Engineer at google")
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8db4583ceaa6402c9bfc073f87bcb277&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
      // totalResult:parsedData.articles.totalResults
    });
  };
  handleNextClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8db4583ceaa6402c9bfc073f87bcb277&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };
  fetchMoreData = async () => {
   
    this.setState({ pages: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=8db4583ceaa6402c9bfc073f87bcb277&page=${
      this.state.page
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      // page: this.state.page+1,
      articles: this.state.articles.concat(parsedData.articles),
      loading: false,
      totalResult: parsedData.totalResults,
    }); 
    // this.props.setProgress(100);
  };
  render() {
    // let { title, desc, UrltoImg } = this.props;
    return (
      <div className="container"> 
       <h1 style={{margin:"65px 20px auto"}}>Top Headlines </h1>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={
              this.state.articles.length !== this.state.articles.totalResult
            }
            loader={<Spinner />} 
          > 
            <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="card mx-auto mt-7"
                    style={{ width: "18rem" }}
                    key={!element.url?"https://www.businessinsider.com/tim-cook-wants-next-apple-ceo-internal-hire-dua-lipa-2023-11":element.url}
                  >
                    <img
                      src={!element.urlToImage?"https://i.insider.com/655e6f874ca513d8242de99c?width=1200&format=jpeg":element.urlToImage}
                      className="card-img-top my-8"
                      alt="..."
                    />
                    <div className="card-body ml-4">
                      <p className="card-text">
                        <h5 className="Card Title">
                          {element.title ? element.title.slice(0, 40) : ""}
                        </h5>
                        {/* <h5 className="Card-text">{element.description}</h5> */}
                        {element.content ? element.content.slice(0, 88) : ""}
                      </p>
                    </div>
                    <a
                      href={element.url}
                      target="_blank"
                      className="btn btn-primary mb-3"
                      on
                    >
                      Read More{" "}
                    </a>
                    <div class="card-footer">
                      <small
                        class="text-muted"
                        style={{ fontWeight: "500", color: "blue" }}
                      >
                        Author :{element.author ? element.author : "UnKnown"}
                      </small>
                    </div>
                    <div class="card-footer">
                      <small class="text-muted">
                        Published on :{" "}
                        {new Date(element.publishedAt).toGMTString()}
                      </small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePreviousClick}> Previous </button>
              <button disabled={this.state.page>=23}type="button" className="btn btn-secondary" onClick={this.handleNextClick}> Next </button>
        </div> */}
        </div>
      // </div>
    );
  }
}
export default NewsItem;
