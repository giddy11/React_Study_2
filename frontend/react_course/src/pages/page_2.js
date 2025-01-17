import React from "react";
import { Link } from "react-router-dom";

export default function Page_2() {
  return (
    <div>
      <p>This is page Two</p>
      <button>
        <Link to={"/page3"}>Go to page 3</Link>
      </button>
    </div>
  );
}
