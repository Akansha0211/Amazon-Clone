import React,{useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth} from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const[{}, dispatch] = useStateValue(); // pull from datalayer
  useEffect(() => {
    //will only run once when the app component loads...
    auth.onAuthStateChanged(authUser=>{
      console.log('USER IS >>>', authUser);
      if(authUser){
        //the user is logged / user was logged in(referesh you then automatically login)
       
        dispatch({
         //this will fire the event and shoot it(user) into the datalayer
         type:'SET_USER',
         user:authUser
       })

      }else{
        //use is logged out...
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
  }, [])
  
  return (
    <Router>
    <div className="app">
      
      <Switch>   
        <Route path="/login">
          <Login/>
        </Route>
        <Route exact path="/checkout">   
          <Header/> 
          <Checkout/>
        </Route>
        {/* default route(homepage route) : whether you hit / or /abc*/}
        <Route path="/">  
          <Header/> 
          <Home/>
        </Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
