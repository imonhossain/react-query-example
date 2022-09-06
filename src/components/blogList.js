import { useEffect, useState } from "react";
import { getPosts } from "../actions/PostAction";
import Blog from "./blog";
import Error from "./error";
import Loading from "./loading";

function BlogList() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        const {data} = await getPosts();
        setIsLoading(false);
        setPosts(data);
      } catch (e) {
        setIsLoading(false);
        setIsError(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="card">
      <h6 className="card-header">Posts</h6>
      <div className="blog-list">
        {isLoading && <Loading />}
        {isError && <Error />}
        {!isLoading && !isError && posts.map((post) => <Blog isActive={false} title={post.title} body={post.body} />)}
      </div>
      
    </div>
  );
}

export default BlogList;
