import React from 'react';
import HouseholdContainer from '../containers/HouseholdContainer';

//Household UI
const HouseholdUI = ({ match }) => {
  return (
    <div>
      <h2>Household UI</h2>
      <HouseholdContainer number={match.params.number} />
    </div>
  );
};

/**
 * Router for Household UI
 * @exports HouseholdUI
 */
export default HouseholdUI;
