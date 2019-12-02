import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {swapModalBool, closeModals, userInputChange} from "../../redux/actions/actions";

//page
import UserPage from "./userPage";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      swapModalBool,
      closeModals,
      userInputChange
    },
    dispatch
  );

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage);