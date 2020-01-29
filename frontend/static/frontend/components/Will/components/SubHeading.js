import React from 'react';

export default function(props) {
  return (
    <div>
      <h5
        className={`is-5 title ${props.classList}`}
      >
        {props.title}
      </h5>

      <hr />
    </div>
  );
}
