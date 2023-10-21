// function Greeting({ name = "", children }) {
//   const displayText = name ? name : "Explorer!";
//   return (
//     <>
//       <h1>Hello {displayText}</h1>
//       {children}
//     </>
//   );
// }

// export default Greeting;

function Greeting(props) {
  const displayText = props.name ? props.name : "Explorer!";
  return (
    <>
      <h1>Hello {displayText}</h1>
      {props.children}
    </>
  );
}

export default Greeting;
