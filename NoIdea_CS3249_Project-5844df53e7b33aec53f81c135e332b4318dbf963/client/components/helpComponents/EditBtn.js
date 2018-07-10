import React from 'react';

/**
 * @class EditBtn
 * @classdesc Base component for Edit Button
 * @param {string} attributes Defines attributes needed for form modal to work
 * @param {form} form Specify what form to link
 * @param {function} handleClick Sets onClick dispatch function
 */
const EditBtn = ({ attributes, form, handleClick }) => (
  <div>
    <button type="button" className="btn" onClick={handleClick} {...attributes}>
      <span className="glyphicon glyphicon-pencil" />
    </button>
    {form && form()}
  </div>
);

export default EditBtn;
