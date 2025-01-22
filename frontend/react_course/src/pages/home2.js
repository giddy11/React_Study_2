import React from 'react'
import { useParams } from 'react-router-dom';

export default function Home2() {

    const {profile_name} = useParams()
  return (
    <div>
        <h1>Welcome {profile_name}</h1>
        <h1>This is the home Page</h1>
    </div>
  )
}
