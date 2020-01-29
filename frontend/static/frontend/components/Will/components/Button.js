import React from 'react';

export default function(props) {
  return (
    <button
      class={`button ${props.classList}`}
    >
      {props.text}
    </button>
  );
}
