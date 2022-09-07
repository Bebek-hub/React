import "./ButtonBg.css"

// const Buttonbg = ({ children }) => {
//   return (
//     <div className="ButtonBg">
//         {children}
//     </div>
//   )
// }

// export default Buttonbg

function ButtonBg(props) {
  return (
    <div className="ButtonBg">
      {props.children}
    </div>
  )
}


export default ButtonBg