 
import React from "react";
import './App.css';
import Form from "./Components/Forms/form";
import Header from './Components/Header/header';
import List from './Components/List/list';
import { useState } from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ListLink from './Components/ListLink/listlink';
function App() {
  const [list, setList] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <div className="row">
        <Routes>
          <Route path='/list' element={<ListLink />}></Route>
        </Routes>
        <Form setList={setList} list={list} />
        <List setList={setList} list={list} />

      </div>

    </BrowserRouter>
  )
}
export default App
