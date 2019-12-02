import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../../redux/actions/actions";


import UserPage from "./userPage";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange
    },
    dispatch
  );

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage);