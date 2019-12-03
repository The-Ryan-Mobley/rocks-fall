import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {swapModalBool, closeModals, userInputChange, setBlankCharacter} from "../../redux/actions/actions";

//page
import HomePage from "./homePage";

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
      userInputChange,
      setBlankCharacter
    
    },
    dispatch
  );

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(HomePage);
  