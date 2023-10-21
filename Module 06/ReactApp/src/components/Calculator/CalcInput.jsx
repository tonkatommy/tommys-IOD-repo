export const CalcInput = ({ id, text }) => {
  return (
    <>
      <label htmlFor={id}>{text}</label>
      <input type="number" id={id} />
    </>
  );
};
