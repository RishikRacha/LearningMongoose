import React from 'react'
import './Contacts.css'
function Contacts(props) {
  return (
    <div>
        <h3 className='moreInfoHeading'>Contact Info</h3>
        <div className='moreInfoBody'>
            <dl>
                <dt><b>Call Me:</b></dt>
                <dd>{props.info.name}</dd> <br />
                <dt><b>Responds to:</b></dt>
                <dd>{props.info.otherContacts}</dd>
            </dl>
        </div>
    </div>
  )
}

export default Contacts