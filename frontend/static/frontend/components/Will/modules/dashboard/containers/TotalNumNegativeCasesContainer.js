import React from 'react';

import SubHeading from '../../../components/SubHeading';

import BasicPieChart from '../components/BasicPieChart';

export default function(props) {
  return (
    <div className="columns is-vcentered">
      <div className="column">
        <BasicPieChart />
      </div>

      <div className="column">
        <SubHeading
          title="Summary"
        />

        <div className="content">
          <ul>
            <li>
              <b>some threshold #1</b> has <b>x</b> cases
            </li>

            <li>
              <b>some threshold #2</b> has <b>y</b> cases
            </li>

            <li>
              <b>some threshold #3</b> has <b>z</b> cases
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
