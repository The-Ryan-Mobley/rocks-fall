import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange,  userLogin} from "../../redux/actions/actions";

//page
import CreateAccount from "./createAccount";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      test: state.formManipulation.ryanStuff,
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
  )(CreateAccount);
  