import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Page_1() {

    const navigate = useNavigate()

    const naviagatePage = () => {
        navigate("/")
    }
  return (
    <div>
        <p>This is page one</p>

        <button>
            <Link to={"/page2"}>Go to page 2</Link>
        </button>

        <button onClick={() => navigate("/")}>Log in</button>
    </div>
  )
}
