import React from "react";

function Search(props) {
    return (
        <form>
            <div className="form-group">
                <input className="form-control" placeholder="Search Name" 
                    value = {props.search}
                    onChange = {props.handleSearchChange}
                    type= "text"
                />
            </div>
        </form>

    )
}

export default Search;