import React from "react";


// Import Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function Icon(props) {
  return (
    <div className="icon">
      <FontAwesomeIcon icon={props.icon} />
      <p>{props.title}</p>
    </div>
  );
}
