import React from 'react';

/**
 * @class EditForm
 * @classdesc Base component for Editing different forms
 * @param {string} attributes Defines attributes needed for form modal to work
 * @param {form} form Specify what form to link
 * @param {function} handleClick Sets onClick dispatch function
 * @param {string} text What text to display on button
 * @param {bool} disable Sets if the button should be disabled
 */
const EditForm = ({ attributes, form, handleClick, text, disable }) => (
  <div>
    <button
      type="button"
      className="btn"
      onClick={handleClick}
      disabled={disable}
      {...attributes}
    >
      {text}
    </button>
    {form && form()}
  </div>
);

export default EditForm;
