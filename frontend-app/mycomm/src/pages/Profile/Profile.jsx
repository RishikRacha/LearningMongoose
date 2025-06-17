import {useState} from 'react'
import './Profile.css'
import Address from './Address/Address'
import Contacts from './Contacts/Contacts'
import {barkus, catus} from './ProfileData'
function Profile() {
    let [user, setUser] = useState(catus);
    let changeUser = () => {
        user==barkus ? setUser(catus) : setUser(barkus)
    }

  return (

    <div className='profileContainer'>
        <img src={user.img} alt="" id='profilePic'/>

        <div className='right'>
            <div className='basicInfo'>
                <dl>
                    <dt><b>User Name</b></dt>
                    <dd>{user.name}</dd>
                    <br />
                    <dt><b>Designation</b></dt>
                    <dd>{user.designation}</dd>
                </dl>
            </div>

            <div className='moreInfo'>
                <Address info = {user}/>
                <Contacts info = {user}/>
            </div>
            <button id='changeUser' onClick={changeUser}>Change Furry Friend</button>
        </div>
    </div>
  )
}

export default Profile