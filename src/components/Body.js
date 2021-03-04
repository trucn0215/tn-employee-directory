import React from "react";

function Body(props) {
    console.log(props)
    
    return (
        <div className="container">
            <table className="table">
                <thead className="mb-3 bg-info text-white font-weight-bold pt-2">
                <tr>
                    <th className="">Image</th>
                    <th className="">Name</th>
                    <th className="">DoB</th>
                    <th className="">Email</th>
                    <th className="">Phone</th>
                </tr>
                </thead>

                <tbody className="border border-primary t-2 pb-2">
                <tr >
                    {/* <td className=""> */}
                        {/* {props.usersInfo.map(user => <img src={user.picture.medium} alt="h5umbnail" />)} */}
                        {/* </td> */}

                        <td className="">
                        {props.usersInfo.map(user => <img src={user.image} alt="h5umbnail" />)}
                        </td>

                        <td className=""> 
                        {props.usersInfo.map(user => <p className="userName">{user.firstName} {user.lastName}</p>)}
                        </td>

                        {/* <td className=""> */}
                        {/* {props.usersInfo.map(user => <p className="age">{user.dob.age}</p>)} */}
                        {/* </td> */}

                        {/* <td className=""> */}
                        {/* {props.usersInfo.map(user => <p className="email">{user.email}</p>)} */}
                        {/* </td> */}

                        {/* <td className=""> */}
                        {/* {props.usersInfo.map(user => <p className="cell">{user.cell}</p>)} */}
                    {/* </td> */}
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Body;