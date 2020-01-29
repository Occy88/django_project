import React from 'react';

export default function(props) {
  return (
    <div>
      <h1
        className={`is-1 title ${props.classList}`}
      >
        {props.title}
      </h1>

      <h3
        className={`is-3 subtitle ${props.classList}`}
      >
        {props.subtitle}
      </h3>

      <hr />
    </div>
  );
}
