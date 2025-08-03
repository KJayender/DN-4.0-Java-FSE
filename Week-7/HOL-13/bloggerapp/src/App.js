import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import Welcome from './components/Welcome';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('Sonu');

  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  return (
    <div className="App">
      <Welcome name={isLoggedIn ? name : null} />
      
      <button onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>

      {/* Conditional Rendering with If-Else */}
      {isLoggedIn ? (
        <>
          <BookDetails />
          <BlogDetails />
          <CourseDetails enrolled={true} />
        </>
      ) : (
        <>
          <p>Please login to access more features.</p>
          <CourseDetails enrolled={false} />
        </>
      )}
    </div>
  );
}

export default App;