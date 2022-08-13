import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }


componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/users/').then(response => {
        this.setState(
            {
                'users':response.data
            }
        )
    }).catch(error => console.log(error))
}
//    componentDidMount() {
//        const users = [
//            {
//            'username': 'Fedor',
//            'firstname':'Фёдор',
//            'lastname':'Достоевский',
//            'email':'Ferdor@localhost'
//            },
//        ]
//        this.setState(
//            {
//                'users': users
//            }
//        )
//    }

    render () {
        return(
        <div>
            <Menu/>
            <UserList users={this.state.users}/>
            <Footer/>
        </div>
        )
    }
}

export default App;
