import React, { useEffect, useState } from "react";

export default function SearchPosts() {
  const [keyword, setKeyword] = useState(""); // getting the user's inputs
  const [allPosts, setAllPosts] = useState([]) // storing all posts
  const [filteredPosts, setFilteredPosts] = useState([]) // store filtered posts

  // Fetch all posts when the websites loads
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            setAllPosts(data)
            setFilteredPosts(data)
        })
  }, []);

  // Filter posts based on the keyword provided by the user
  useEffect(() => {
    if (keyword.trim() === '') {
        setFilteredPosts(allPosts)
    } else {
        const filtered = allPosts.filter(post => post.title.toLowerCase().includes(keyword.trim().toLowerCase()))
        setFilteredPosts(filtered)
    }
  }, [keyword, allPosts])

  console.log(keyword);

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />

      <ul>
        {
            filteredPosts.map(post => (
                <li>Title: {post.title}</li>
            ))
        }

      </ul>
    </div>
  );
}
