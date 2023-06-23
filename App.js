import logo from './logo.svg';
import './App.css';
import ChildA from './ChildA';
import React,{useState,createContext} from 'react';
const search = createContext()
function App() {
  const getSearch = (data) =>{
    fetch(`https://dummyjson.com/products/search?q=${data}`)
.then(res => res.json())
.then((res)=>{
    console.log(res);
});
  }
  return (
    <>
    <search.Provider value={getSearch}>
         <ChildA/>
    </search.Provider>
    </>
  );
}

export default App;
export {search}