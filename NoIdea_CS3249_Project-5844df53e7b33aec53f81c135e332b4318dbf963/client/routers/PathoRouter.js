import React from 'react';
import BiomarkerPathoContainer from '../containers/BiomarkerPathoContainer';
import BiopsyPathoContainer from '../containers/BiopsyPathoContainer';

//Patho UI
const PathoUI = ({ match }) => {
  switch (match.params.type) {
    case 'Biomarker':
      return (
        <div>
          <h2>Biomarker Pathologist</h2>
          <BiomarkerPathoContainer />
        </div>
      );
    case 'Biopsy':
      return (
        <div>
          <h2>Biopsy Pathologist</h2>
          <BiopsyPathoContainer />
        </div>
      );
  }
};

/**
 * Router for Pathologist UI
 * @exports PathologistUI
 */
export default PathoUI;
