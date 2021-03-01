import React from "react";

function Body({ users }) {
    return (
        <div className="usersTable">
            <div className="row mb-3 bg-info text-white font-weight-bold pt-2">
                <h5 className="col-2"> Image</h5>
                <h5 className="col-2">Name</h5>
                <h5 className="col-1">DoB</h5>
                <h5 className="col-4">Email</h5>
                <h5 className="col-3">Phone</h5>
            </div>
            <div className="border border-primary row pt-2 pb-2">
                <div className="col-2">
                    {users.map(users => <img src={users.picture.medium} alt="h5umbnail"/>)}
                </div>
                <h5 className="col-2"> {users.map(users => <p className="userName card-text">{users.name.first} {users.name.last}</p>)}
                </h5>

                <h5 className="col-1">
                {users.map(users => <p className="age card-text">{users.dob.age}</p>)}
                </h5>
                <h5 className="col-4">{users.map(users => <p className="email">{users.email}</p>)}</h5>
                <h5 className="col-3">{users.map(users => <p className="cell">{users.cell}</p>)}</h5>
            </div>
        </div>
    );
}

export default Body;