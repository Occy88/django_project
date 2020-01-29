import React from 'react';

import Title from '../../../components/Title';
import Heading from '../../../components/Heading';
import Separator from '../../../components/Separator';

import TotalNumCasesContainer from '../containers/TotalNumCasesContainer';
import TotalNumNegativeCasesContainer from '../containers/TotalNumNegativeCasesContainer';

export default function() {
  return (
    <div className="section">
      <Title
        title="Dashboard"
        subtitle="System overview"
      />

      <div className="box">
        <Heading
          title="Total number of cases"
          subtitle="Positive vs negative"
        />

        <TotalNumCasesContainer />
      </div>

      <Separator />

      <div className="box">
        <Heading
          title="Total number of negative cases"
          subtitle="Negative cases with different thresholds"
        />

        <TotalNumNegativeCasesContainer />
      </div>
    </div>
  );
}
