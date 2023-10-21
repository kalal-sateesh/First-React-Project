// eslint-disable-next-line react/prop-types
const Input = ({ changeHandler, val }) => {
  return (
    <input
      type="text"
      id="Reset"
      onChange={(e) => changeHandler(e.target.value)}
      value={val}
    />
  );
};
export default Input;
