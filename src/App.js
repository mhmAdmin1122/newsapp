import './App.css';
import React, { Component } from 'react'
import Navebar from './Components/Navebar';
import News from './Components/News';
// react router setup
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// react top loader setup
import LoadingBar from 'react-top-loading-bar' 
export default class App extends Component {
  
  apikey1 = "060b4b10339f4b739d6f5ebd613519a2";
  apikey2 = "8bce45a095c948558c0f8d7ae5b7c3e2";
  apikey3 = "050ad221e33e433a82c329d1e78ded38"
  pageSize1 = 5;
  pageSize2 = 9;
  
  state = {
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <Router>

        <div>

          <Navebar />

          <LoadingBar
            height={4}
            color='darkred'
            progress={this.state.progress}
          />

          <Routes>
            <Route exact path="/" element={ <News setProgress={this.setProgress} key="general" postPerPage={this.pageSize1} country="in" detailTitle="Home" category="general" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/business" element={ <News setProgress={this.setProgress} key="business" postPerPage={this.pageSize2} country="in" detailTitle="Business" category="business" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/entertainment" element={ <News setProgress={this.setProgress} key="entertainment" postPerPage={this.pageSize2} country="in" detailTitle="Entertainment" category="entertainment" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/general" element={ <News setProgress={this.setProgress} key="general" postPerPage={this.pageSize1} country="in" detailTitle="General" category="general" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/health" element={ <News setProgress={this.setProgress} key="health" postPerPage={this.pageSize2} country="in" detailTitle="Health" category="health" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/science" element={ <News setProgress={this.setProgress} key="science" postPerPage={this.pageSize2} country="in" detailTitle="Science" category="science" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/sports" element={ <News setProgress={this.setProgress} key="sports" postPerPage={this.pageSize2} country="in" detailTitle="Sports" category="sports" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

            <Route exact path="/technology" element={ <News setProgress={this.setProgress} key="technology" postPerPage={this.pageSize2} country="in" detailTitle="Technology" category="technology" apiKey={this.apikey3} topic="top-headlines" domain="https://newsapi.org" />} />

          </Routes>

        </div>

      </Router>
    )
  }
}


// api keys
// 01{060b4b10339f4b739d6f5ebd613519a2}admin email [changed: "2:40pm, 11/10/2022"];
// 02{8bce45a095c948558c0f8d7ae5b7c3e2}hasaan352 email [used: "2:43pm, 11/10/2022"];
// 03{050ad221e33e433a82c329d1e78ded38}hasaanmumtaz24 email [used: "10:07pm, 12/10/2022"]