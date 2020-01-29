import React from 'react';

import Title from '../../../components/Title';
import Heading from '../../../components/Heading';
import SubHeading from '../../../components/SubHeading';
import Button from '../../../components/Button';
import Separator from '../../../components/Separator';

import ThresholdSettingsFormContainer from '../containers/ThresholdSettingsFormContainer';
import MatchSettingsFormContainer from '../containers/MatchSettingsFormContainer';

export default function() {
  return (
    <div className="section">
      <Title
        title="Settings"
        subtitle="Configure threshold and matching settings"
      />

      <div className="box">
        <Heading
          title="Threshold settings"
          subtitle="wow"
        />

        <div className="box">
          <SubHeading title="Create new threshold" />
          <ThresholdSettingsFormContainer />
        </div>

        <div className="box">
          <SubHeading title="Existing thresholds" />

          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Name</th>
                <th>Start</th>
                <th>End</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>some threshold #1</th>
                <th>1</th>
                <th>1</th>
                <th>
                  <Button
                    classList="is-danger is-small is-pulled-right"
                    text="Remove"
                  />
                </th>
              </tr>

              <tr>
                <th>some threshold #2</th>
                <th>1</th>
                <th>1</th>
                <th>
                  <Button
                    classList="is-danger is-small is-pulled-right"
                    text="Remove"
                  />
                </th>
              </tr>

              <tr>
                <th>some threshold #3</th>
                <th>1</th>
                <th>1</th>
                <th>
                  <Button
                    classList="is-danger is-small is-pulled-right"
                    text="Remove"
                  />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Separator />

      <div className="box">
        <Heading
          title="Match settings"
          subtitle="wow"
        />

        <div className="box">
          <SubHeading title="Configure positive / negative match percentages" />
          <MatchSettingsFormContainer />
        </div>
      </div>
    </div>
  );
}
