import logo from './logo.svg';
import './App.css';

import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

<head>
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>

</head>

function App() {
  const [isDataFetch, setisDataFetch] = useState(false);

  const [users, setUsers] = useState([]);
  const [myBtnClick, setisBtnClick] = useState(false);

  const userInfo = async () => {
    setisBtnClick(true);

    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);

    setInterval(() => {
      setisDataFetch(true);
    }, 1500);
  };

  

  return (
    
   <div class="container-fluid my"> 
    <div class="navbar navbar-light bg-dark">
       <h1 class="h">Task-2</h1>
              <form class="form-inline ml-auto">
                <button type="button" class="btn btn-primary" onClick={userInfo}>Get Users</button>
              </form>
    </div>
       

      {myBtnClick ? (
        isDataFetch ? (
          
          <div class="row"  >
              {users.map(({ id, first_name, last_name, avatar, email }) => {
              return (
                <div class="col-4" >
                <div class="card card-bg text-white">
                <img class="card-img-top" height={200}   src={avatar} alt="Card image"/>
                  <div class="card-body">
                    <h3>
                      {first_name} {last_name}
                    </h3>
                    <p>{email}</p>
                  </div>
                </div>
                </div>
              );
            })}
          
            
          </div>
        ) : (
          <div classname="LOADING"> <h2>Loading Users...</h2></div>
        )
      ) : (
        <> </>
      )}
    </div>
  );
}
export default App;
