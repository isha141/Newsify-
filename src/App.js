import './App.css';
import Navbar from './Components/Navbar';
import React, { useState, Component } from 'react'
// import News from './Components/News';
// import Business from './Components/Business';
import NewsItem from './Components/NewsItem';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import spinner from './Components/Spinner';

export default class App extends Component {
//  const [progress, setProgress] = useState(0)
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>  
      <Router>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
      <Navbar></Navbar>
      <Switch>
          <Route exact path="/">
            <NewsItem setProgress={this.setProgress} key="general" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="general"></NewsItem>
          </Route>
          <Route exact path="/business">
           <NewsItem setProgress={this.setProgress}key="business" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="business"></NewsItem>
          </Route>
          <Route exact path="/technology">
           <NewsItem setProgress={this.setProgress}key="technology" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="technology"></NewsItem>
          </Route>
          <Route exact path="/cricket">
           <NewsItem setProgress={this.setProgress}key="cricket" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="cricket"></NewsItem>
          </Route>
          <Route exact path="/tableTennis">
           <NewsItem setProgress={this.setProgress}key="tabletennis" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="tabletennis"></NewsItem>
          </Route>
          <Route exact path="/entertainment">
           <NewsItem setProgress={this.setProgress}key="entertainment" title="Isha Jindal" desc="I am upcoming Software ENgineer At Google " pageSize={10} country="in" category="entertainment"></NewsItem>
          </Route>
          <Route exact path="/health">
           <NewsItem setProgress={this.setProgress}key="health" title="Isha Jindal" desc="I am upcoming Softwrare ENgineer At Google " pageSize="10" country="in" category="health"></NewsItem>
          </Route>
          <Route exact path="/science">
           <NewsItem setProgress={this.setProgress}key="science" title="Isha Jindal" desc="I am upcoming Softwrare ENgineer At Google " pageSize="10" country="in" category="science"></NewsItem>
          </Route>
          
        </Switch>
        {/* <News title="Isha Jindal" desc="I am upcoming Softwrare ENgineer At Google "></News> */}
        
      </Router>
      </div>
    )
  }
}

// my api- key "02d4107f2c1044f6a205773012c28c38"