import React from 'react'
import './UserCard.css'

function UserCard({user, indexx}) {
  return (
    <div className='cardContainer'>
        <h2>User {indexx + 1}</h2>
        <img src={user.picture.large} alt="" />
        <h3>{user.name.first.toUpperCase()} {user.name.last.toUpperCase()}</h3>
        <p>City: <i>{user.location.city}</i></p>
        <p>{user.dob.age + user.gender[0].toUpperCase() }</p>
    </div>
  )
}

export default UserCard