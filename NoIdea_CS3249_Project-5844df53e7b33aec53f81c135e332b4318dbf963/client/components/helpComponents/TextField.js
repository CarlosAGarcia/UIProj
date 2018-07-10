import React from 'react';
import { Control, LocalForm } from 'react-redux-form';

/**
 * @class TextField
 * @classdesc Base component for Text input field
 * @param {string} remarks State value
 * @param {string} show Sets if input field is shown ('none'|'')
 * @param {function} handleChange Sets onChange dispatch function
 */
const TextField = ({ remarks, show, handleSubmit }) => (
  <LocalForm onSubmit={val => handleSubmit(val)} style={{ display: show }}>
    {remarks}
    <Control.text model=".text" />
  </LocalForm>
);

export default TextField;
