
import React, { useState } from "react";
import { useRef } from "react";
import {Link} from 'react-router-dom'
import './list.css'
 
const List = ({ list, setList }) => {
    const listInput=useRef()
    const removeFromList = (title) => {
        const index = list.indexOf(title)
        list.splice(index, 1)
        setList([...list])
    }
 
    const [value, setValue]=useState('')
const goToList=()=>{
    if(listInput.current.value!=null){
       setValue(listInput.current.value.length)
    }
}
    return (
        <div className="list">
            <div className="favourite">
                <input ref={listInput} className="list-input" type="text" placeholder="Введите название списка" />
                <ul>
                    {
                        list?.map(item => {
                            return (
                                <>
                                    <div className="ul" style={{ display: 'flex' }}>
                                        <li style={{ width: '166px', marginBottom: '10px' }}>{item}</li>
                                        <button style={{ height: '20px' }} onClick={() => { removeFromList(item) }}>X</button>
                                    </div>
 
                                </>
                            )
                        })
                    }
                </ul>
    {
    value.length > 0 ? <Link to={'/list'}>go to list</Link> :  <button onClick={goToList} className="save-button">Сохранить список</button>
}
            </div>
        </div>
    )
}
 
export default List

 