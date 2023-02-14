import React from "react";

const Error = ({mensaje}) => {
    return(
        <div>
            <div className="bg-red-700 text-white p-3 uppercase text-center rounded">
                <p>{mensaje}</p>
            </div>
        </div>
    )
}

export default Error;
