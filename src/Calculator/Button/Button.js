import "./Button.css"

// const Button = ({ className, value }) => {
//   return (
//         <button className={className}>
//             {value}
//         </button>
//   )
// }

function Button(props) {
  return (
    // <><button className="operator-clear">{props.value}</button>
    <button className={props.className}>{props.value}</button>
    // </>
  )
}

export default Button