import React from 'react';
import NurseContainer from '../containers/NurseContainer';

//Nurse UI
const NurseUI = ({ params }) => {
  return (
    <div>
      <h2>Nurse UI</h2>
      <NurseContainer />
    </div>
  );
};

/**
 * Router for Nurse UI
 * @exports NurseUI
 */
export default NurseUI;
