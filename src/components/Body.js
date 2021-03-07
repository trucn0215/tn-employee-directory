import React from "react";

function Body(props) {
    return (
    <thead className="bg-info text-white font-weight-bold">
        <tr>
            <th className="me-1 align-middle">Image</th>
            <th className="me-4 align-middle">Name
            </th>
            <th className="me-2 align-middle">DoB
            </th>
            <th className="me-3 align-middle">Email</th>
            <th className="me-3 align-middle">Phone</th>
        </tr>
    </thead>
    )
}

export default Body;