import logo from './logo.svg';
import './App.css';
import React ,{useEffect, useState} from 'react';

// class App extends React.Component() {
//   constructor(props){
//     super(props);
//     this.state = { email :'' }
//   }
//   handleChange = (e) => {
//     this.setState({
//       email:e.target.value
//     });
//   }
//   render(){
    // return (
    //   <div className="App" style={ {padding :10} }>
    //     <input
    //     value = {this.state.email}
    //     onChange={this.handleChange}
    //     />
    //     <p>Email:{this.state.email}</p>
    //   </div>
    // );
//   }
// }

//custom hooks and using them
function useFormInputs(initialValue){
  const [value,setValue ] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onchange: handleChange,
  };
}


function LoginForm(){
  const email = useFormInputs('');
  const password = useFormInputs('');


  return (
      <form>
      <div>Email </div>

      <div>
        {/* <input type="text" value={email.value} onChange = {email.onChange} /> */}
        {/* //using spread operator and making it short */}
        <input type="text" {...email} />

      </div>
      <br />
      <div>Password</div>
      <div>
      {/* <input type="password" value={password.value} onChange={password.onChange} /> */}
      <input type="password" {...password} />
      </div>
      <p>
        <strong>
          <em>Email: | </em>
        </strong>
        {email.value}
        <strong>
          <em>Pasword: </em>
        </strong>{' '}
        {password.value}
      </p>
      </form>
  );
}

function SignupForm(){
  const email = useFormInputs('');
  const password = useFormInputs('');
  const confirmPassword = useFormInputs('');

  return(
    <form>
    <div>Email</div>

    <div>
      {/* <input type="text" value={email.value} onChange = {email.onChange} /> */}
      {/* //using spread operator and making it short */}
      <input type="text" {...email} />

    </div>
    <br />
    <div>Password</div>
    <div>
    {/* <input type="password" value={password.value} onChange={password.onChange} /> */}
    <input type="password" {...password} />
    </div>
    <br />
    <div>Confrim Password:</div>
    <div>
      <input type="password" {...confirmPassword} />
    </div>
    <p>
      <strong>
        <em>Email: | </em>
      </strong>
      {email.value}
      <strong>
        <em>Pasword: | </em>
      </strong>{' '}
      {password.value}
      <strong>
        <em>Confirm Pasword:</em>
      </strong>{' '}
      {confirmPassword.value}
    </p>
    
    </form>
  );

}


// function App(){
  //using useState hook in react
  // const emailState = useState('sid@gmail.com'); 
  // can pass empty string also to fill self
  // const emailState =useState('');
  // const email = emailState[0];
  // const setEmail = emailState[1];

  // //using hook useState again -- name field
  // const nameState =useState('');
  // const name = nameState[0];
  // const setName = nameState[1];

  //using array destructing

  // const [email,setEmail] =useState('');
 
  // //using hook useState again -- name field
  // const [name,setName] =useState('');
  

  // function handleChange(e){
  //   setEmail(e.target.value)
  // }

  // function handleChangeName(e){
  //   setName(e.target.value)
  // }

  // const [userId,setUserId] = useState('1');
  // const [data,setData] = useState([]);

  // useEffect(() => { //fake api data fetch
  //   // const url = `https://jsonplaceholder.typicode.com/posts?userId=${1}`;

  //   //change to userid 2
  //   const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;

  //   fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log('DATA',data);
  //     setData(data); // will send multiple calls
  //   });
  // // },[]); // will stop console to have multiple api calls - only 1 api call will be amde
  // },[userId]); // change to user id 2 by clicking button

  // //adding eventListener
  // useEffect(() => {
  //   document.addEventListener('mousemove',onMouseMove);


  //     //performing cleanup of mousemove in console
  //     return()=>{
  //       document.removeEventListener('mousemove',onMouseMove);
  //     };
  // });


  // function onMouseMove(event){
  //   console.log(event.clientX);
  // }

  // return (
     // <div className="App" style={{ padding : 20 }}>
      {/* <input
      value = {email}
      onChange={handleChange}
      />
      <br/>
      <input
      value = {name}
      onChange={handleChangeName}
      />
     
      <p>Email: {email}</p>
      <p>Name: {name}</p> */}
      {/* <h1>App</h1>
      <button onClick={() => setUserId('2')}>Change user id to 2</button>
      {data.map((user) => {
        <div>
          <p>{user.title}</p>
        </div>
//       })} */}
//     </div>
  // );
// }

//LoginForm and SignupForm function App()
function App(props){
  return(
    <div className='App' style={{ padding : 20 }}>
      <h2>Login</h2>
      <LoginForm />
      <hr />
      <h3>Signup</h3>
      <SignupForm />
    </div>

  );

}

export default App;

