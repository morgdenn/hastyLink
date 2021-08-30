import React, { useState, useEffect } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';

function Options(props) {
  const [open, setOpen] = useState(false);
  const [default_to, setDefault_to] = useState('');

  const default_to_change = (event) => {
    setDefault_to(event.target.value);

    props.setSettings({ default_to: event.target.value });
  };

  return (
    <div className="m-5">
      <Button
        variant="link"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        options
      </Button>
      <Collapse in={open}>
        <form>
          <div className="mb-3">
            <label htmlFor="default_to" className="form-label">
              Default To:
            </label>
            <input
              type="email"
              value={default_to}
              onChange={default_to_change}
              className="form-control"
              id="default_to"
              aria-describedby="default_to_help"
            />
            <div id="default_to_help" className="form-text">
              Would you like a default email address to send to?
            </div>
          </div>
        </form>
      </Collapse>
    </div>
  );
}

export default Options;
