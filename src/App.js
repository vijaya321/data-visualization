import React, { useState } from "react";
import GeoChart from "./GeoChart";
import { Container, Header } from 'semantic-ui-react'
import data from "./states.geo.json";
import "./App.css";
import Demo from "./Demo"

function App() {
  const [property, setProperty] = useState("hot_mrkt");

  return (
    <React.Fragment>
    <Container text>
    <Header as='h2' style={{marginTop:'1.3em', marginLeft: '30%'}}>Zillow Home Index Dashboard</Header>
    <p>
      The Zillow Home Value Index (ZHVI) is a measure of the median home value in a given region, as determined by Zillow. This dashboard provides insights on below questions:
      <ol>
        <li>How do ZHVI values by MSA compare across the nation?</li>
        <li>How has ZHVI changed over time?</li>
        <li>What are the hottest markets right now?</li>
        <li>What would you predict ZHVI to be for Seattle MSA for December 2022?</li>
      </ol>
    </p>
    <p>
      Keeping the development time in mind, I took 2 approaches to solve these questions.
      <ul>
        <li>Questions 2 & 3 are solved using React and D3.js (JavaScript library and framework for creating visualizations). Please use dropdown below to view the hottest markets and how ZHVI changed over time.</li>
        <li>Please use <span><a href="https://public.tableau.com/app/profile/vijaya5891/viz/Test-ZHVI_16702570518240/Story1?publish=yes">Tableau Dashboard </a></span>
           link to access Tableau dashboard which has 4 stories that shows graphs for all 4 questions.
        </li>
      </ul>
    </p>
  </Container>
      {/* <div>
        <p style={{marginLeft:'2em'}}>Select :</p><span>
        <select
          value={property}
          onChange={event => setProperty(event.target.value)} style={{width: '500px', height: '30px'}}
        >
          <option value="hot_mrkt">Hottest Market</option>
          <option value="zhvi_time">ZHVI Over Time</option>
        </select>
        </span>
      </div> */}
      <label for="chart-type" style={{fontSize:'22px'}}>Select a chart type: </label>
      <select id="chart-type" 
        value={property} 
        onChange={event => setProperty(event.target.value)} 
        style={{width:'500px', height:'50px', fontSize:'20px', padding:'2px'}}>
        <option value="hot_mrkt">Hottest Markets</option>
        <option value="zhvi_time">ZHVI Over Time</option>
      </select>
      {property === 'hot_mrkt' && <>
        <Header as='h2' style={{marginTop:'1.3em', marginLeft: '30%'}}>
          What are the hottest markets right now?
        </Header>
        <GeoChart data={data} property={property} />
      </>}

      {property === 'zhvi_time' && <>
        <Header as='h2' style={{marginTop:'1.3em', marginLeft: '30%'}}>How has ZHVI changed over time?</Header>
        <Demo />
      </>}

    </React.Fragment>
  );
}

export default App;
