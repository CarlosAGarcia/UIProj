import React from 'react';
import Select from 'react-select';

/**
 * @class SelectComp
 * @classdesc Base component for Select component
 * @param {object[]} options Array of options, input form: {value: '', label: ''}
 * @param {string} value State value
 * @param {function} handleChange Sets onChange dispatch function
 */
const SelectComp = ({ options, value, handleChange }) => (
  <Select
    name="select-component"
    value={value}
    clearable={false}
    options={options}
    onChange={handleChange}
  />
);

export default SelectComp;
