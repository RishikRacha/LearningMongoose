import {useEffect, useState} from 'react'
import './Users.css'
import axios from "axios"
import UserCard from '../../components/UserCard/UserCard';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { usersActionCreator } from '../../redux/action/myAction';

function Users() {

    const usersDispatch = useDispatch();
    const [users, setUsers] = useState([]);

    // To fetch users when component is mounted
    const [isLoading, setLoading] = useState(false);
    let usersData = useSelector( (store) => {return store.users} )
    useEffect( () => { if(usersData.length==0) getUsersData() }, [] );

    // var data= [<p>name</p> , <p>ri</p>];

    
    const getUsersData = () => { setLoading(true);

        axios
        .get("https://randomuser.me/api/?results=50")
        .then((res) => {
            console.log('Here is the whole array of objects fetched :'.toUpperCase());
            console.log(res.data.results);
            // setUsers(res.data.results);      //not updating state anymore
            usersDispatch(usersActionCreator(res.data.results));
        })
        .catch(error => {
            alert("something went wrong");
            console.log(error);
        })
        .finally(() => setLoading(false));
        
    }

    let clickHandler = user => alert(`${user.email}\n\t${user.cell}`);

  return (
    <div className='usersContainer'>
        <h1>Users Information</h1>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officia culpa soluta sequi incidunt excepturi, at cumque repellendus! Id repellat temporibus tempore beatae repudiandae quod accusamus eligendi dicta, sit magnam, modi sunt? Earum itaque laudantium cum animi excepturi magnam sint eius accusantium alias dolores, omnis quo expedita odit? Aliquid harum repudiandae recusandae ipsam vero, iste deleniti nisi, blanditiis corrupti fuga officiis, molestiae incidunt molestias voluptate voluptates quam asperiores ea voluptatibus veritatis nesciunt fugiat doloribus hic! Unde labore ipsum assumenda rerum et maiores fugiat ratione voluptatem dignissimos tempore hic, aperiam error consequuntur eveniet eos velit. Obcaecati nesciunt et in laborum. Illo!</p> */}
        <p>This page loads the users automatically when the Users component is mounted using the useEffect() Hook and the users data is stored in the redux store. So the useEffect Hook is not triggered when the store already has Users data, hence removing the reload when I unmount and remount this component. This significantly reduces the load time because it doesn't fetch data again when reloaded. So I can move to a different page of the web app (without reloading ofcourse) and not have to worry about losing this set of users. Clicking the 'Get New Users' button will fetch a new group of users from randomUser API. </p>
        <button onClick={getUsersData} disabled={isLoading}>{isLoading ? "Fetching Users" : "Get New Users"}</button>

        <h2>Users data</h2>
        {/* {isLoading && <h2 style={{position:'absolute', margin:"410px"}}>Loading...</h2>} */}
        {isLoading && <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</h2>}

        
        <div className='usersCard'> { usersData.length >0 && 
                    usersData.map(function (user, index) {
                        return  <div key={index} onClick={() => clickHandler(user)} >
                                    <UserCard user={user} indexx={index} />
                                </div>
                    })


                }
        </div>
    </div>
  )
}

export default Users