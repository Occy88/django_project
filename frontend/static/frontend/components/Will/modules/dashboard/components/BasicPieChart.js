import React from 'react';

import { PieChart, Pie, Cell } from 'recharts';

export default function(props) {
  let data = [
    {name: 'Group A', value: 400},
    {name: 'Group B', value: 300},
    {name: 'Group C', value: 300},
    {name: 'Group D', value: 200}
  ];
  let COLORS = ['#ee5253', '#ff9f43', '#10ac84', '#222f3e'];

  return (
    <div>
      <PieChart width={800} height={400} onMouseEnter={() => {}}>
        <Pie
          data={data}
          cx={350}
          cy={200}
          innerRadius={120}
          outerRadius={180}
          fill="#8884d8"
          paddingAngle={10}
        >
          {
            data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </div>
  );
}
