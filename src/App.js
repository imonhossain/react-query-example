import { useEffect } from 'react';
import './App.css';
import PostForm from './components/blogForm';
import CommentList from './components/commentList';



function App() {
  useEffect(() => {

    console.log('called');
  }, [])
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <CommentList />
        </div>
        <div className="col-md-6">
          <PostForm />
        </div>
      </div>
    </div>
  );
}

export default App;
