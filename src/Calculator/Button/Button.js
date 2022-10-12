import React from 'react';
import './Button.css';

// const Button = ({ className, value }) => {
//   return (
//         <button className={className}>
//             {value}
//         </button>
//   )
// }

function Button(props) {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Button;
