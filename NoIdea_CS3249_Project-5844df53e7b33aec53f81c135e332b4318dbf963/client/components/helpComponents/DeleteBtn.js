import React from 'react';

/**
 * @class DeleteBtn
 * @classdesc Base component for Delete Button
 * @param {function} handleClick Sets onClick dispatch function
 */
const DeleteBtn = ({ handleClick }) => (
  <button type="button" className="btn btn-danger" onClick={handleClick}>
    <span className="glyphicon glyphicon-remove" />
  </button>
);

export default DeleteBtn;
