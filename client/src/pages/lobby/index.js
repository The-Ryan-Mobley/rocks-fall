import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  userInputChange,  
  userLogin,
  setCharacterData,
  swapModalBool,
  closeModals,
  lobbyInputChange, 
  lobbyHostData, 
  lobbyUserJoin, 
  lobbyUserSet, 
  lobbyMessageReset, 
  lobbyMessageAdd, 
  lobbyMessageChange
} from "../../redux/actions/actions";

//page
import Lobby from "./lobby";

const mapStateToProps = state => {
    return { 
      userData: state.formManipulation.userData,
      lobbyData: state.lobbyManipulation.lobbyData,
      modalData: state.modalControls.modalData
     };
  };

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      userInputChange,
      userLogin,
      setCharacterData,
      swapModalBool,
      closeModals,
      lobbyInputChange,
      lobbyHostData,
      lobbyUserJoin,
      lobbyUserSet,
      lobbyMessageReset,
      lobbyMessageAdd,
      lobbyMessageChange
    },
    dispatch
  );

//higher order component that maps redux functions to component
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Lobby);
  