import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

const Blog = () => {
  const { data, loading, error } = useFetch('https://blogs-250r.onrender.com/blogs');
  const name = localStorage.getItem('name');
  const [likesMap, setLikesMap] = useState({});
  const handleLike = (blogId) => {
    setLikesMap(prevLikes => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[blogId] = (updatedLikes[blogId] || 0) + 1;
      return updatedLikes;
    });
  };

  useEffect(() => {
    if (data) {
      const initialLikesMap = {};
      data.forEach(blog => {
        initialLikesMap[blog.id] = blog.like || 0;
      });
      setLikesMap(initialLikesMap);
    }
  }, [data]);

  return (
    <>
      <Nav />
      <div className="home">
        <h2>
          Welcome to <span className="logo-i">Socially</span>!
          <span className="user"> {name}</span>
        </h2>
        <br />

        {error && <div>{error}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          data && data.map(blog => (
            <div className="blog-preview" key={blog.id}>
              <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by: {blog.author}</p>
              </Link>
              <button className="like" onClick={() => handleLike(blog.id)}>
                Like: {likesMap[blog.id] || 0}
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Blog;
