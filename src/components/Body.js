import React from "react";

function Body( {users} ) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"> List of Users</h5>
                {users.map(users => <p className="userName card-text">{users.name.first} {users.name.last}</p>)}
            </div>
        </div>
    );
}

export default Body;