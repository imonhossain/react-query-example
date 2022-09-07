

function Comment({ body, id }) {
  return (
    <div key={`comment-${id}`} className={`cursor-pointer list-group-item list-group-item-action flex-column align-items-start`}>
      <p className="mb-1">{body}</p>
    </div>
  );
}

export default Comment;
