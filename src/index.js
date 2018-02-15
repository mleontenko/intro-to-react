import React from 'react';
import ReactDOM from 'react-dom';

// Create new component
const App = () => {
    return <div>Hi!</div>;
}

// Take component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));