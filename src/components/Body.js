import React from "react";

function Body({ users }) {
    return (
        <div className="">
            <div className="card-body row">
                <h5 className="card-title col">Name</h5>
                <h5 className="card-title col">Date of Birth</h5>
                <h5 className="card-title col">Email</h5>
                <h5 className="card-title col">Phone</h5>
            </div>

            <div className="card-body border border-primary row">
                <div className="col">{users.map(users => <p className="userName card-text">{users.name.first} {users.name.last}</p>)}</div>
                {/* <div className="col">{users.map(users => <p className="age card-text">{users.dob.age}</p>)}</div> */}
                {/* <div className="col">{users.map(users => <p className="email card-text">{users.email}</p>)}</div> */}
                {/* <div className="col">{users.map(users => <p className="cell card-text">{users.cell}</p>)}</div> */}
            </div>
        </div>
    );
}

export default Body;