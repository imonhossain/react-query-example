
import Comment from "./comment";

function CommentList() {
  return (
    <div className="card">
      <h6 className="card-header">Selected post's Comments</h6>
      <Comment/>
    </div>
  );
}

export default CommentList;
