import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

const Results = () =>{
    const {category, id} = useParams();
    const [apiResults, setApiResults] = useState({});
    const navigate = useNavigate();

    const clearInfo = () =>{
        console.log("clear")
        navigate("/");
    }

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${category}/${id}`).then(response=>{
            console.log("Results ->", response)
            setApiResults(response.data)
        })
        .catch(err => {
            console.log(err)
        });
        
    },[category, id])

    return(
        <>
        <h4>Name:{apiResults.name}</h4>
        <button type="button" className="btn btn-outline-danger" onClick={clearInfo}>Clear</button>
        </>
    )
}



export default Results;