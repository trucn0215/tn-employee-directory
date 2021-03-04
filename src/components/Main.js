import React, { Component } from "react"
import Header from "./Header";
import Search from "./Search";
import Body from "./Body";
import API from "../utils/API"

class Main extends Component {

    state = {
        users: [],
        search: "",
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {

                this.setState({ users: res.data.results })

                // console.log({users})
            })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Search />
                <Body
                    usersInfo={this.state.users}
                />
            </div>
        )
    }
}

export default Main;