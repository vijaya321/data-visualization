import React, { useState } from "react";
// import Video from "./Video";
import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
// import data from "./convertcsv.geo.json";
// import { csv } from 'd3';
// import data from "./gz_2010_us_040_00_500k.json";
import "./App.css";

function App() {
  const [property, setProperty] = useState("pop_est");
  console.warn('data ', data)
  return (
    <React.Fragment>
      <h2>Zillow Home Index Dashboard</h2>
      <GeoChart data={data} property={property} />
      <h2>Select property to highlight</h2>
      <select
        value={property}
        onChange={event => setProperty(event.target.value)}
      >
        <option value="pop_est">Population</option>
        <option value="name_len">Name length</option>
        <option value="gdp_md_est">GDP</option>
      </select>
      {/* <Video /> */}
    </React.Fragment>
  );
}

export default App;
