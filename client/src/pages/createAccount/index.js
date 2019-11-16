import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {userInputChange} from "../../redux/actions/actions";

//page
import CreateAccount from "./createAccount";

const mapStateToProps = state => {
    return { currentItem: state.form.currentItem };
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
  )(CreateAccount);
  