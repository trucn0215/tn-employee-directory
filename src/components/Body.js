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
                    <img src={props.image} alt="h5umbnail"/>)
                </div>

                <h5 className="col-2"> {props.name}</h5>

                <h5 className="col-1">{props.age}</h5>

                <h5 className="col-4">{props.email}</h5>

                <h5 className="col-3">{props.cell}</h5>
            </div>
        </div>
    );
}

export default Body;