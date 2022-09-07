
import { useEffect, useState } from "react";
import { getComments } from "../actions/PostAction";
import Comment from "./comment";
import Error from "./error";
import Loading from "./loading";

function CommentList() {
  const [value, setValue] = useState('1');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    const loadComments = async () => {
      setIsLoading(true);
      try {
        const { data } = await getComments(value);
        setIsLoading(false);
        setComments(data);
      } catch (e) {
        setIsLoading(false);
        setIsError(false);
      }
    };
    loadComments();
  }, [value]);

  return (
    <div className="card">
      <h6 className="card-header">Comments</h6>
      <div className="p-3">
        <h5> Select your post</h5>
        <select className="form-control" value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="1">qui est esse</option>
          <option value="2">nesciunt quas odio</option>
          <option value="3">magnam facilis autem</option>
          <option value="4">dolorem dolore est ipsam</option>
        </select>
      </div>
      {isLoading && <Loading />}
      {isError && <Error />}
      {!isLoading && !isError && comments.map((item) => <Comment body={item.body} id={item.id} />)}
    </div>
  );
}

export default CommentList;
