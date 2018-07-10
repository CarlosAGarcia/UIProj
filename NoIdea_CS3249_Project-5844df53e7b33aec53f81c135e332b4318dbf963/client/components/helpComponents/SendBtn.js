import React from 'react';

/**
 * @class SendBtn
 * @classdesc Base component for Send Button
 * @param {function} handleClick Sets onClick dispatch function
 */
const SendBtn = ({ handleClick }) => (
  <button type="button" className="btn btn-danger" onClick={handleClick}>
    <span className="glyphicon glyphicon-new-window" />
  </button>
);

export default SendBtn;
