import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <p>Type to search names from the list below</p>

                <input className="form-control" placeholder="Search Name" 
                    value = {props.search}
                    onChange = {props.handleSearchChange}
                    type= "text"
                />
            </div>

            <div className="mb-2">Sort the list by: {" "}
                <button className="btn btn-outline-info">A-Z</button> {" "}
                <button className="btn btn-outline-info">Z-A</button> {" "}
                <button className="btn btn-outline-info">Younger to Older</button> {" "}
                <button className="btn btn-outline-info">Older to Younger</button>
            </div>
        </form>
    )
}

export default Search;