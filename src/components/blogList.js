import Blog from "./blog";

function BlogList() {
  return (
    <div className="card">
      <h6 className="card-header">Posts</h6>
      <Blog isActive={true}/>
      <Blog/>
    </div>
  );
}

export default BlogList;
