import './App.css';
import PostForm from './components/blogForm';
import BlogList from './components/blogList';
import CommentList from './components/commentList';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4">
          <BlogList />
        </div>
        <div className="col-md-4">
          <CommentList />
        </div>
        <div className="col-md-4">
          <PostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
