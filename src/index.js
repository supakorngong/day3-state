import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';

// <input/> พิมได้ เเต่ react จะไม่รู้สิ่งที่ user พิม (Uncontrolled Component)
// <input value="codecamp"/> : controlled Component (Hardcode)
const root = ReactDOM.createRoot(document.getElementById('root'));

// function App(){
//   const [data,setDate] = React.useState("");
//   // const data = "codecamp"
//   const handleChange = (event) =>{
//     setDate(event.target.value); //react จะรู้สิ่งที่ user พิม เรียก control component เนื่องจากมีการ set state
//     console.log(event.target.value)
//   }
//   return <input value={data} onChange={handleChange}/>;
// }

function App(){
  const [selected,setselected] = React.useState("3")
  const handleSelect = (event) =>{
    // console.log(event.target.value)
    setselected(event.target.value)
  }
  return(
    <select onChange={handleSelect} value={selected}>
      <option >option-1</option>
      <option value="2">option-2</option>
      <option value="3">option-3</option>
    </select>
  )
}

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

