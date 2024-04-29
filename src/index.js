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


// function App(){
//   const [selected,setselected] = React.useState("3")
//   const handleSelect = (event) =>{
//     // console.log(event.target.value)
//     setselected(event.target.value)
//   }
//   return(
//     <select onChange={handleSelect} value={selected}>
//       <option >option-1</option>
//       <option value="2">option-2</option>
//       <option value="3">option-3</option>
//     </select>
//   )
// }


function App(){
   // ใช้ งาน state 
  //เขียน handler 
  // ผูก UI (state,Handler)
  const [username,setUsername] = React.useState("");
  const handleChangeUsername = (event) => setUsername(event.target.value);
  const [password,setPassword] = React.useState("");
  const handleChangePassword = (event) => setPassword(event.target.value);
  const [selected,setSeleceted] = React.useState("male");
  const handleChangeSeleceted = (event) => setSeleceted(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault()
    // validation
    if(password.length < 6) return;
    // send to server
    console.log('submit')

    // Reset State
    setUsername("");
    setPassword("");
    setSeleceted('male');
  }
  const handleReset = (event) =>{
    setUsername("") // รู้ว่าจะ set username
    console.log("state",username)
    setPassword("") // รู้ว่าจะ set password
    setSeleceted("male") // รู้ว่าจะ set selected
    // code ..
    // code ..
    // end handler function => react จะอัพเดท state พร้อมกันทีเดียว
  }
 
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label>username</label>
        <input type="text" placeholder='eg. johneiei' value={username} onChange={handleChangeUsername}/>
      </div>
      
      <div>
        <label>password</label>
        <input type="password" value={password} onChange={handleChangePassword}/>
      </div>
      <div>
        <label>gender</label>
        <select value={selected} onChange={handleChangeSeleceted}>
          <option>male</option>
          <option>female</option>
          <option>other</option>
        </select>
      </div>
      <div>
      <button type='submit'>send</button>
      <button type='reset' onClick={handleReset}>reset</button>
      </div>

    </form>
  )
}

root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

