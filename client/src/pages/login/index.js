import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin} from "../../redux/actions/actions";

import Wrapper from "../../"

//page
import Login from "./login";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange,
      userLogin
    },
    dispatch
  );

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login);
  