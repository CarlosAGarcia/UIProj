import React from 'react';

/**
 * @class Checkbox
 * @classdesc Base component for Checkbox
 * @param {bool} checked Sets if checkbox is checked
 * @param {bool} disable Sets if checkbox is modifiable
 * @param {string} hide Sets if checkbox is shown ('none'|'')
 * @param {function} handleChange Sets onClick dispatch function
 */
const Checkbox = ({ checked, disable, hide, handleChange }) => (
  <input
    type="checkbox"
    checked={checked}
    disabled={disable}
    style={{ display: hide }}
    onChange={handleChange}
  />
);

export default Checkbox;
