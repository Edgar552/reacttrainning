import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


function App(props){
    return(
        <h1>{props.greeting},{props.nombre}</h1>
    );
}


const AppWithGreeting= withGreeting(App)("Buenas Tardes");


function withGreeting(WrappedAppComponent){

    return function WrappedComponentWithGreeting(greeting){
        return function ComponentApp(props){
            return(
                <React.Fragment>
                    <WrappedAppComponent {...props} greeting={greeting}/>
                    <h2>Buenas Tardes, desde wrapped component</h2>
                </React.Fragment>
            );
        }
    }
}



root.render(
  <React.StrictMode>
    <AppWithGreeting  nombre="User"/>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
