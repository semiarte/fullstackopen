/* eslint-disable react/prop-types */
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button;