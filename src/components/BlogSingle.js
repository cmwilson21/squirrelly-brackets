import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";
import { useParams } from "react-router-dom";

export const BlogSingle = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  return (
    <div>
      <h1>Blog Single</h1>
    </div>
  );
};

// export default BlogSingle;
