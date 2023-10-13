// simpler Comment component with the user info section extracted out into its own component
function Comment(props) {
  return (
    <div className="Comment componentBox">
      <UserInfo user={props.author} /> {/* here we pass the author prop down to the UserInfo component */}
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toLocaleString()}</div>
    </div>
  );
}

export default Comment;
