import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Page_1() {

    const navigate = useNavigate()

    const profile_name = "Emmanuel"
    const path = `/home2/${profile_name}`

    const naviagatePage = () => {
        navigate(path)
    }
  return (
    <div>
        <p>This is page one</p>

        <button>
            <Link to={"/page2"}>Go to page 2</Link>
        </button>

        {/* <button onClick={() => navigate("/")}>Log in</button> */}
        <button onClick={naviagatePage}>Log in</button>
    </div>
  )
}
