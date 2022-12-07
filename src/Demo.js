import React from 'react';
import './App.css';
import BarChart from './BarChart';
import data from './data';

const randomColor = () => {
  return `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255})`;
}

// const loadCsv = () => {
//   csv('data.csv').then(data => {
//     console.log(data)
//   })
// }
// loadCsv()
const len = data[Object.keys(data)[0]].length;
const keys = Object.keys(data);
const colors = keys.reduce((res, item) => ({ 
    ...res, 
    ...{ [item]: randomColor() } 
}), {});



const labels = keys.reduce((res, item, idx) => {
  return{
  ...res, 
  ...{[item]: (
    <div style={{textAlign:"center",}}>
      <div>{item}</div>
    </div>
    )}
}}, {});

// const time = Array(22).fill(0).map((itm, idx) => idx + 1);
const time = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]

class Demo extends React.Component {
  render(){
    return (
      <div className="App">
        <div className="container">
          <BarChart 
            start={true}
            data={data} 
            timeline={time}
            labels={labels}
            colors={colors}
            len={len}
            timeout={400}
            delay={100}
            timelineStyle={{
              fontSize: "35px",
              color: "rgb(148, 148, 148)",
              textAlign: 'center'
            }}
            textBoxStyle={{
              textAlign: "right",
              color: "rgb(133, 131, 131)",
              fontSize: "20px",
            }}
            barStyle={{
              height: "35px",
              marginTop: "10px",
              borderRadius: "10px",
            }}
            width={[15, 65, 10]}
            maxItems={50}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
