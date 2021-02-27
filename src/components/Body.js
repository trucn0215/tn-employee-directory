import React from "react";

function Body({ users }) {
    return (
        <div className="usersTable">
            <div className="card-body row">
                <h5 className="col">Image</h5>
                <h5 className="col">Name</h5>
                <h5 className="col">Date of Birh5</h5>
                <h5 className="col">Email</h5>
                <h5 className="col">Phone</h5>
            </div>

            <div className="card-body border border-primary row">
                <div className="col">
                    {users.map(users => <img src={users.picture.medium} alt="h5umbnail"/>)}
                </div>
                <div className="col">{users.map(users => <p className="userName card-text">{users.name.first} {users.name.last}</p>)}</div>
                <div className="col">{users.map(users => <p className="age card-text">{users.dob.age}</p>)}</div>
                <div className="col">{users.map(users => <p className="email card-text">{users.email}</p>)}</div>
                <div className="col">{users.map(users => <p className="cell card-text">{users.cell}</p>)}</div>
            </div>
        </div>
    );
}

export default Body;