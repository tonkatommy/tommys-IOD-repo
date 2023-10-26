export const CalcOperator = () => {
  return (
    <>
      <label htmlFor="operator">Operation:</label>
      <select name="operator" id="operator" defaultValue={"+"}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
    </>
  );
};
