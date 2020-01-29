import React from 'react';

import Separator from './Separator';

export default function(props) {
  return (
    <div>
      <Separator />

      <footer className="footer">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
            </div>

            <div className="column">
            </div>

            <div className="column">
              <p className="is-size-3 has-text-grey-light has-text-right">
                some_company
              </p>
              <p className="is-size-5 has-text-grey-light has-text-right">
                Know your client
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
