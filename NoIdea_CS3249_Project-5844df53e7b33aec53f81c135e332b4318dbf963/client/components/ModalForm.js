import React from 'react';

/**
 * @class form
 * @classdesc Modal for forms
 */
const ModalForm = ({ title, id, form }) => (
  <div className="modal fade" id={id} tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
          <h4 className="modal-title">{title}</h4>
        </div>
        <div className="modal-body">
          {form}
        </div>
      </div>
    </div>
  </div>
);

export default ModalForm;
