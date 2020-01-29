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
              There are <b>x</b> cases in the systems
            </li>

            <li>
              Of which <b>y</b> are positive
            </li>

            <li>
              And <b>z</b> are negative
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
