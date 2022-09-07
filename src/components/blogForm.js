import { useState } from "react";
import { savePost } from "../actions/PostAction";

function PostForm() {
  const [title, setTitle] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const onClickSave = async () => {
    setIsLoading(true);
    try {
      const { data } = await savePost(title);
      if (data) {
        setTitle('');
        setIsLoading(false);
      }
    } catch (err) {
      setIsLoading(false);
    }
  }
  return (
    <div className="card">
      <h6 className="card-header">Post Form</h6>
      <div className="card-body">
        <div className="form-group">
          <input className="form-control" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => onClickSave()} disabled={isLoading}>{isLoading ? 'saving...' : 'Save' }</button>
      </div>
    </div>
  );
}

export default PostForm;
