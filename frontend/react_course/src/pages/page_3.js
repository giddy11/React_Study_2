import React from "react";
import { Link } from "react-router-dom";

export default function Page_3() {
  return (
    <div>
      <p>This is page Three</p>
      <button>
        <Link to={"/page1"}>Go to page 1</Link>
      </button>
    </div>
  );
}
