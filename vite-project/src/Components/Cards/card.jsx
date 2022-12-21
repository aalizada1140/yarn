import React from "react";
import './card.css'

const Card = ({ movieData, setList, list }) => {

    const addToFav = (title) => {
const result=list.includes(title)
if(!result){
    setList([...list, title])
}
    }
 
    return (
        <>
            {
                movieData.map(item => {
                    return (
                        <div className="card">
 
                            <img className="img" src={item.Poster} alt={item.Title} />
                            
                            <div className="info">
                                <h1>{item.Title}</h1>
 
                                <button onClick={() => { addToFav(item.Title) }}>Add</button>
                            </div>
 
                        </div>
 
                    )
                })
            }
 
        </>
    )
}
 
export default Card