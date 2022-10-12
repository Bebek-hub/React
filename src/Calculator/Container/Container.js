import React from "react";
import "./Container.css";

// const Container = ({ children }) => {
//   return (
//     <div className="Wrapper">
//         {children}
//     </div>
//   );
// };

// export default Container;

function Container(props) {
  return (
    <div className="Wrapper">
      {props.children}
    </div>
  )
}


export default Container