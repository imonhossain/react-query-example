import './App.css';
import BlogList from './components/blogList';
import CommentList from './components/commentList';

function App() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <BlogList />
        </div>
        <div className="col-md-6">
          <CommentList />
        </div>
      </div>
    </div>
  );
}

export default App;
