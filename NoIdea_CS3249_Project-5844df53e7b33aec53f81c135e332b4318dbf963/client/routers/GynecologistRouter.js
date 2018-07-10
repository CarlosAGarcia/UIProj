import React from 'react';
import GynecologistContainer from '../containers/GynecologistContainer';

//Gynecologist UI
const GynecologistUI = ({ params }) => {
  return (
    <div>
      <h2>Gynecologist UI</h2>
      <GynecologistContainer />
    </div>
  );
};

/**
 * Router for Gynecologist UI
 * @exports GynecologistUI
 */
export default GynecologistUI;
