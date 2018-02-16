import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyAmBDc2VkEJWle2VCHcuxeA3q7F-oIUO54';

// Create new component
const App = () => {
    return <div>Hi!</div>;
}

// Take component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));