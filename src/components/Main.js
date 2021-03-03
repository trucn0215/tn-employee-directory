import React, { Component } from "react"
import Header from "./Header";
import Search from "./Search";
import Body from "./Body";
import API from "../utils/API"

class Main extends Component {

    state = {
        users: [],
        search: ""
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {
                
                const listUsers = res.data.results;
                // console.log(listUsers)
                const newUserArray = []

                for (let i=0; i< listUsers.length; i++){
                    let getInfo = {
                        image: listUsers[i].picture.medium,
                        name: listUsers[i].name.first + " " + listUsers[i].name.last,
                        age: listUsers[i].dob.age,
                        email: listUsers[i].email,
                        cell: listUsers[i].cell
                    }
                newUserArray.push(getInfo);

                }

                this.setState({ users: newUserArray })

                // console.log({users})
    })
}

render() {
    return (
        <div className="container">
            <Header />
            <Search />
            <Body userInfo = {this.state.users}/>
        </div>
    )
}
    
}

export default Main;