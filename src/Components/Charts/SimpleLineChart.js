import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
const data = [
      {name: '10', Mobile: 4000, Desktop: 2400, amt: 2400},
      {name: '20', Mobile: 3000, Desktop: 1398, amt: 2210},
      {name: '30', Mobile: 2000, Desktop: 9800, amt: 2290},
      {name: '40', Mobile: 2780, Desktop: 3908, amt: 2000},
      {name: '50', Mobile: 1890, Desktop: 4800, amt: 2181},
      {name: '60', Mobile: 2390, Desktop: 3800, amt: 2500},
      {name: '70', Mobile: 3490, Desktop: 4300, amt: 2100},
];
const SimpleLineChart = () =>{
  	return (
    	<LineChart width={1000} height={300} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5 }}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="Mobile" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="Desktop" stroke="#82ca9d" />
      </LineChart>
    );
}

export default SimpleLineChart;