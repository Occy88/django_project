import React from 'react';

import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';

export default function(props) {
  return (
    <form className="form">
      <div className="columns">
        <div className="column">
          <TextInput
            label="Positive match percentage"
            type="text"
            placeholder="enter a positive match percentage"
          />
        </div>

        <div className="column">
          <TextInput
            label="Negative match percentage"
            type="text"
            placeholder="enter a negative match percentage"
          />
        </div>
      </div>

      <Button
        classList="is-success is-light is-fullwidth"
        text="Update"
      />
    </form>
  );
}
