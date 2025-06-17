import { useState } from 'react'
import { myActionCreator } from '../../action/myAction';
import myStore from '../../store/store';

function Name() {

    const [name, setName] = useState("UnholyBerry (default)");  //now we have some data in the component, here in form of state.

    function handleState(event) {
      setName(event.target.value);
    }

    let inputBoxStyle = {width:"100%", margin:'20px 0', padding:'10px', borderRadius:'10px', border:'0px'}

  return (
    <div style={{color: 'red', textAlign: 'center'}}>
        <h2>NAME Component</h2> <p>This is in redux</p>
        <input type="text" onChange={handleState} placeholder='Type Name' style={inputBoxStyle}/>
        
        
        <button onClick={() => {
            myStore.dispatch(myActionCreator(name));
        }}>
            Submit Name</button>
    </div>
  )
}

export default Name