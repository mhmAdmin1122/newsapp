import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(10)
    const url = `${props.domain}/v2/${props.topic}?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.postPerPage}`
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70)
    setArticles(parsedData.articles)
    // console.log(parsedData)//describe the status of api and its use
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }
  
  useEffect(()=>{
    updateNews();
  }, [])
  
  // const handlePrevClick = async () =>{
  //   setPage(page - 1)
  //   updateNews();
  // }
  // const handleNextClick = async () =>{
  //   setPage(page + 1)
  //   updateNews();
  // }

  const fetchMoreData = async () => {
    const url = `${props.domain}/v2/${props.topic}?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.postPerPage}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };

  return (
    <>
      <div className="container d-flex justify-content-between">

        <h1 style={{
          color: "#1aff1a", 
          fontWeight: "400", 
          fontFamily: "'Shrikhand', cursive", 
          fontSize: "28px", 
          textShadow: "1px 2px 2px black", 
          margin: "90px 0px 40px 0px", 
          cursor: "context-menu"
        }} > 	
          &#128308; RBSNewser - Top Headlines || Read News Online 
        </h1>

        <h1 style={{
          color: "black", 
          fontWeight: "300", 
          fontFamily: "'Shrikhand', cursive", 
          fontSize: "20px", 
          textShadow: "1px 2px 2px #1aff1a", 
          cursor: "context-menu",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          padding: "6px",
          borderRadius: "20px"
        }}> 
          Topic: {props.detailTitle} &#8811; {totalResults} 
        </h1>
      </div>

      {loading && <Spinner/>}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
      <div className="container">
        <div className="row">
            {articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} defaultImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMjKprbRAePuemL_1OEAMi42YVVWCtHiPnlWWfzn4HWMC8hfpDN8TD68yChQoZRHPMz3w&usqp=CAU" publishDate={element.publishedAt} />
              </div>
            })}
        </div>
      </div>
      </InfiniteScroll>
    </>
  )
}


export default News