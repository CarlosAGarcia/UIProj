/** @module container/util */

/** 
 * @namespace modal
 * @memberof module:container/main
 * @desc Container to connect Modal form to its state and props.
 */
import { connect } from 'react-redux';
import ModalForm from '../components/ModalForm';

const mapStateToProps = (state, ownProps) => {
  return {
    id: ownProps.id,
    form: ownProps.children,
    title: ownProps.title
  };
};

const TestContainer = connect(mapStateToProps)(ModalForm);

export default TestContainer;