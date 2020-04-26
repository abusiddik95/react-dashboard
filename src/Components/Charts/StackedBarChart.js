import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend}  from 'recharts';
const data = [
      {name: 'Page A', Visit: 4000, Click: 2400, amt: 2400},
      {name: 'Page B', Visit: 3000, Click: 1398, amt: 2210},
      {name: 'Page C', Visit: 2000, Click: 9800, amt: 2290},
      {name: 'Page D', Visit: 2780, Click: 3908, amt: 2000},
      {name: 'Page E', Visit: 1890, Click: 4800, amt: 2181},
      {name: 'Page F', Visit: 2390, Click: 3800, amt: 2500},
      {name: 'Page G', Visit: 3490, Click: 4300, amt: 2100},
];

const StackedBarChart = () => {

  	return (
        <div className="single-chart">
            <h3> Visit Today</h3>
            <BarChart width={280} height={230} data={data}
                margin={{top: 20, right: 10, left: 20, bottom: 5}}>
                <h3>Todays Usage</h3>
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend />
                <Bar dataKey="Visit" stackId="a" fill="#8884d8" />
                <Bar dataKey="Click" stackId="a" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default StackedBarChart;