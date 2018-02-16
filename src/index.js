import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyAmBDc2VkEJWle2VCHcuxeA3q7F-oIUO54';

// Create new component
class App extends Component{
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
            </div>
            );
    }
}

// Take component's generated HTML and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));