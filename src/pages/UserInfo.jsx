import React, { Component } from 'react';

const UserInfo = (props) => {

    if(props.user==null) 
        return <h1>no user selected</h1>

    let user = {...props.user};
    // user = Object.keys(p).map((key) => [(key), props.user[key]]);
    console.log((user));
    
    // const displayuser = user.map((prop) => <li key = {prop[0]} >{prop[0]} ":"{prop[1]}</li>);

    // const displayuser = ;

    return (<div >
            <ul>
                <li >{user.id}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
            </ul>
            </div>
        )
}
 
export default UserInfo;