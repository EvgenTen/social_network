import React from "react";
import c from "./AddMessage.module.css";

const AddMessage = props => {

	let newMessageElement = React.createRef();

	let addNewMessage = () => {
	  let text = newMessageElement.current.value;
	  props.addNewMessage(text);
	  newMessageElement.current.value = "";
	};
  
	let onMessageChange = () => {
	  let text = newMessageElement.current.value;
	  
	}
	return (
	  <div>
      <form>
        <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessage} />

        <img
          src="http://www.clker.com/cliparts/N/A/G/S/5/f/red-square-button-hi.png"
          onClick={addNewMessage}
        />
      </form>
	  </div>
	);
  };
  export default AddMessage;