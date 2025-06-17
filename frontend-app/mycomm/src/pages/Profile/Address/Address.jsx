import React from 'react'

function Address(props) {
  return (
    <div>
        <h3 className='moreInfoHeading'>Address</h3 >
        <div className='moreInfoBody'>
            <dl>
                <dt><b>Where?</b></dt>
                <dd>{props.info.city}</dd><br />
                <dt><b>Pin Code:</b></dt>
                <dd>{props.info.pin}</dd>
            </dl>
        </div>
    </div>
  )
}

export default Address