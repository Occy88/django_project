import React from 'react';

import Title from '../../../components/Title';

import CaseListContainer from '../containers/CaseListContainer';

export default function() {
  return (
    <div className="section">
      <Title
        title="Case list"
        subtitle="All customer applications"
      />

      <div className="box">
        <CaseListContainer />
      </div>
    </div>
  );
}
