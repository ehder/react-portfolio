
//import  ReactDOM  from "react-dom";
import  ReactDOM  from "react-dom/client";
import App from './App'
import './index.css'

//ReactDOM.render(<App/>, document.querySelector("#root"))

const root = ReactDOM.createRoot(document.querySelector("#root"))
root.render(
    <App/>
);


//comment line : is for as tutorial. 
//  -they ReactDom.render is not support in react 18
//  -and React.createRoot is from react-dom/client not from react-dom

// With a querySelector statement, you can select an element based on a CSS selector. 
// This means you can select elements by ID, class, or any other type of selector. 
// Using the getElementById method, you can only select an element by its ID.