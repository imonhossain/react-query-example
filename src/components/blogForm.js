import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState('');
  const onClickSave = () => {

  }
  return (
    <div className="card">
      <h6 className="card-header">Post Form</h6>
      <div className="card-body">
        <div className="form-group">
          <input className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={onClickSave}>Save</button>
      </div>
    </div>
  );
}

export default PostForm;
