import React from 'react';
import HPVLabContainer from '../containers/HPVLabContainer';
import BiomarkerLabContainer from '../containers/BiomarkerLabContainer';
import BiopsyLabContainer from '../containers/BiopsyLabContainer';

//Lab UI
const LabUI = ({ match }) => {
  switch (match.params.type) {
    case 'HPVLab':
      return (
        <div>
          <h2>HPV Lab</h2>
          <HPVLabContainer />
        </div>
      );
    case 'BiomarkerLab':
      return (
        <div>
          <h2>Biomarker Lab</h2>
          <BiomarkerLabContainer />
        </div>
      );
    case 'BiopsyLab':
      return (
        <div>
          <h2>Biopsy Lab</h2>
          <BiopsyLabContainer />
        </div>
      );
  }
};

/**
 * Router for Lab UI
 * @exports LabUI
 */
export default LabUI;
