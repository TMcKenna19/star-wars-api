import React, {useEffect} from "react";
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const SearchBar = (props) => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]) // store categories in state [people, planets, ...]
    const [formData, setFormData] = useState({ //data stored in state from form name="id" name="categories"
        category:"",
        id:""
    })

    const changeHandler = (e)=>{
        console.log("Change")
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("form data -> ", formData);
        axios.get(`https://swapi.dev/api/${formData.category}/${formData.id}`).then(response=>{
            console.log("api response ->", response)
            navigate("/results")
        })
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
        axios.get("https://swapi.dev/api/").then(response => {
            console.log("res.data >", response.data) // check data 
            let result = Object.keys(response.data) // extract Object keys from resonse.data, map object keys for drop down
            console.log("obj key >",result) // view 
            setCategories(result) // result is only available in useEffect. save to state variable setCategories
            })
            .catch(err => {
                console.log(err)
            });
            

        },[])
    

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="">Search For: </label>
                    <select onChange={changeHandler} className="form-control-sm" name="category" id="">
                         {
                             categories.map((category, i)=>{
                                return(                                   
                                    <option key={i} value={category}>{category}</option>                                   
                                )
                             })
                         }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="id">ID:</label>
                    <input onChange={changeHandler} className="form-control-sm" type="number" name="id"></input>
                </div>
                <input className="btn btn-dark mt-5 mb-5" type="submit" value="search"/>
            </form>
        </div>
    );
}

export default SearchBar;