import React from 'react';

import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

export default function(props) {
  return (
    <form className="form">
      <div className="columns">
        <div className="column is-three-fifths">
          <TextInput
            label="Threshold name"
            type="text"
            placeholder="enter a threshold name"
          />
        </div>

        <div className="column">
          <TextInput
            label="Start"
            type="text"
            placeholder="start value"
          />
        </div>

        <div className="column">
          <TextInput
            label="End"
            type="text"
            placeholder="end value"
          />
        </div>
      </div>

      <Button
        classList="is-success is-light is-fullwidth"
        text="Create"
      />
    </form>
  );
}
