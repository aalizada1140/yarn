import React from "react";
import './form.css';
import { getMovieData } from '../../services/db'
import { useState } from "react";
import Card from "../Cards/card";
 
const Form = ({ setList, list }) => {
    const [data, setData] = useState([0])
    const submitHandler = async (a) => {
        a.preventDefault();
        if (a.target.search.value) {
            const result = await getMovieData(a.target.search.value);
            setData(result);
        }
    }
 
    return (
            <div>
                <form onSubmit={submitHandler} className="searchbytitle">
                    <label htmlFor="search">
                        Искать фильм по названию:
                        <input type="text" name="search" className="searchmovie" placeholder="Например, Shawshank Redemption" />
                    </label>
 
                    <button type="submit" className="submitname">Искать</button>
                </form>
 
                <div>
                    <Card movieData={data} setList={setList} list={list} />
                </div>
            </div>


 
    )
}
export default Form