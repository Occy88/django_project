import React from 'react';

import Button from '../../../components/Button';

export default function(props) {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>Case number</th>
          <th>Name</th>
          <th>Match percentage</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>#1</th>
          <th>some name</th>
          <th>10%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#2</th>
          <th>some name</th>
          <th>23%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#3</th>
          <th>some name</th>
          <th>42%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#4</th>
          <th>some name</th>
          <th>11%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#5</th>
          <th>some name</th>
          <th>52%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#6</th>
          <th>some name</th>
          <th>21%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#7</th>
          <th>some name</th>
          <th>64%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>

        <tr>
          <th>#8</th>
          <th>some name</th>
          <th>14%</th>
          <th>
            <Button
              classList="is-link is-small is-pulled-right"
              text="View"
            />
          </th>
        </tr>
      </tbody>
    </table>
  );
}
