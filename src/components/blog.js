function Blog({
  isActive=false,
  title,
  body,
}) {
  return (
    <div className={`cursor-pointer list-group-item list-group-item-action flex-column align-items-start ${isActive && 'active'}`}>
      <div className="d-fle w-100 justify-content-between">
        <h5 className="mb-1">{title}</h5>
      </div>
      <p className="mb-1 small">{body}</p>
    </div>
  );
}

export default Blog;
