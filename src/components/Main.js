import React, { Component } from "react"
import Header from "./Header";
import Search from "./Search";
// import Body from "./Body";
import API from "../utils/API"

class Main extends Component {

    state = {
        users: [],
        search: "",
    }

    componentDidMount = () => {
        API.getUsers()
            .then(res => {

                const newUser = res.data.results;

                const userSorted = []

                // console.log(newUser)

                for (let i = 0; i < newUser.length; i++) {
                    const userInfo = {
                        image: newUser[i].picture.medium,
                        firstName: newUser[i].name.first,
                        lastName: newUser[i].name.last,
                        age: newUser[i].dob.age,
                        email: newUser[i].email,
                        cell: newUser[i].cell
                    }

                    userSorted.push(userInfo)
                }

                this.setState({ users: userSorted })

                // console.log({users})
            })
    }


    renderTableData() {
        return this.state.users.map((user, index) => {
            const { id, image, firstName, lastName, age, email, cell } = user //destructuring
            return (
                <tr key={id}>
                    <td><img src={image} alt="userImage" /></td>
                    <td>{firstName} {lastName}</td>
                    <td>{age}</td>
                    <td>{email}</td>
                    <td>{cell}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Search />

                <div>
                    <table id='users' className="table table-striped">
                        <thead className="bg-info text-white font-weight-bold">
                            <tr>
                                <th className="me-1">Image</th>
                                <th className="me-4">Name</th>
                                <th className="me-2">DoB</th>
                                <th className="me-3">Email</th>
                                <th className="me-3">Phone</th>
                            </tr>
                        </thead>

                        <tbody className="border border-primary t-2 pb-2">
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}

export default Main;