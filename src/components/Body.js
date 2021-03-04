import React from "react";

function Body( props ) {
    console.log(props)
    return (
        <div className="Table">
            <div className="row mb-3 bg-info text-white font-weight-bold pt-2">
                <h5 className="col-2"> Image</h5>
                <h5 className="col-2">Name</h5>
                <h5 className="col-1">DoB</h5>
                <h5 className="col-4">Email</h5>
                <h5 className="col-3">Phone</h5>
            </div>
            <div className="border border-primary row pt-2 pb-2">
                <div className="col-2">
                    {props.usersInfo.map(user => <img src={user.picture.medium} alt="h5umbnail"/>)}
                </div>

                <h5 className="col-2"> {props.usersInfo.map(user => <p className="userName card-text">{user.name.first} {user.name.last}</p>)}</h5>
                
                <h5 className="col-1">
                    {props.usersInfo.map(user => <p className="age card-text">{user.dob.age}</p>)}
                </h5>

                <h5 className="col-4">{props.usersInfo.map(user => <p className="email">{user.email}</p>)}</h5>
                
                <h5 className="col-3">{props.usersInfo.map(user => <p className="cell">{user.cell}</p>)}</h5>
            </div>
        </div>
    );
}

export default Body;