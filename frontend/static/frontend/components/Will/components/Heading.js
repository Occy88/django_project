import React from 'react';

export default function(props) {
  return (
    <div>
      <h3
        className={`is-3 title ${props.classList}`}
      >
        {props.title}
      </h3>

      <h5
        className={`is-5 subtitle ${props.classList}`}
      >
        {props.subtitle}
      </h5>

      <hr />
    </div>
  );
}
