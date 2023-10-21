export const CalcOperator = () => {
  return (
    <>
      <label htmlFor="operator">Operation:</label>
      <select name="operator" id="operator">
        <option value="+" selected>
          +
        </option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
    </>
  );
};
