const Button = ({ name, handler }) => {
  return <button onClick={handler}>{name}</button>;
};

export default Button;
