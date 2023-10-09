function Greeting({ name = "", children }) {
  const displayText = name ? name : "Explorer!";
  return (
    <>
      <h1>Hello {displayText}</h1>
      {children}
    </>
  );
}

export default Greeting;
