import React from "react";
import { useNavigate } from "react-router-dom";

const Results = () =>{
    const navigate = useNavigate();

    const clearInfo = () =>{
        console.log("clear")
        navigate("/");
    }

    return(
        <>
        <h6>Results</h6>
        <button type="button" className="btn btn-outline-danger" onClick={clearInfo}>Clear</button>
        </>
    )
}



export default Results;