import React from 'react';

export default function(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>

      <div class="control">
        <input
          class="input"
          type={props.type || "text"}
          placeholder={props.placeholder || ""}
          value={props.value || ""}
        />
      </div>
    </div>
  );
}
