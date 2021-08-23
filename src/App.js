
import axios from 'axios';
import './App.css';
import {Component } from 'react';
import UserInfo from './pages/UserInfo';


class App extends Component {

  state = {
    users : [],
    selectedUser : null 
  }

  async getUsers(){
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({users:data});
  }

  componentDidMount(){
    this.getUsers();
  }


  handleClick(user){
    this.setState({selectedUser:user});
    console.log(this.state.selectedUser);
  }

  render(){
    const listItems = this.state.users.map((user) => <li key={user.id} onClick = {()=>this.handleClick(user)}>{user.name}</li>);

  return(
    <div className = "App">
      <h1>Users Information Page</h1>
      <div className = "sidenav-left">
        <h3 style={{paddingLeft : "10px"}}>Users</h3>
        <ul>
          {listItems}
        </ul>  
      </div>
      <div className = "sidenav-right">
        
        <h3 style={{paddingRight : "10px"}}>User Details</h3>
        <UserInfo user = {this.state.selectedUser}></UserInfo>
      </div>

    </div>
  )}
}

export default App;
