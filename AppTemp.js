import React from "react";
import ReactDOM from 'react-dom/client';

// const heading = React.createElement("h1", {id:"heading"}, "hello world from react");
const jsxHeading = <h1 id="heading" className="head" tabIndex="1">hello world from react</h1>
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)
// root.render(jsxHeading)
// const heading_nested = React.createElement("div", {id:"heading"}, 
// React.createElement(
//     "div", {id:"heading2"},
//     [React.createElement("h1", {id:"heading3"}, "hi"),
//     React.createElement("h1", {id:"heading3"}, "hi2")]) 
// );

// both of the below are same. react functional components
const HeadingComponent = () =>{
    return  <h1 id="heading" className="head" tabIndex="1">hello from react functional component.</h1>
}

const Title = () =>{
    return <h1> Namaste React using JSX!</h1>
}
const number = 1000;
const title = (
    <h1 className="head">
        {number}
        Namaste React using JSX!</h1>
)
const HeadingComponent2 = () =>(
    <div>
        {/* we can write javascript here. */}
        {number}
        {/* putting react element inside the component */}
        {title}
        <Title />
        {/* we can call javascript functions so */}
        {Title()}
    <h1 id="heading" className="head" tabIndex="1">hello from react functional component2.</h1>
    </div>
)

root.render(<HeadingComponent2/>)


/*
* Header
    - logo
    - nav items
* Body
    - Search
    - restaurant container
        - restaurant 

* Footer
    - Copyright
    - Links
    - Address
    - Contact
*/ 
