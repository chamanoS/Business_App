import { useEffect, useState } from "react";
import {Header, Posts, Sidebar} from "../../components";
import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";

function Blog() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="blog">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
export default Blog
