import React from 'react';
import './App.css';
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import Favorites from './components/Favorites.jsx';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { photos: [], favs: [] };
    }

    async componentDidMount() {
        try {
            const url = "http://randyconnolly.com/funwebdev/3rd/api/travel/images.php";
            const response = await fetch(url);
            const jsonData = await response.json();
            this.setState( {photos: jsonData } );
        }   
        catch (error) {
            console.error(error);
        }
    }
    
    updatePhoto = (id, photo) => {
        // Create deep clone of photo array from state.
        // We will use a lodash function for that task.
        const copyPhotos = cloneDeep(this.state.photos);
        // find photo to update in cloned array
        const photoToReplace = copyPhotos.find( p => p.id === id);
        // replace photo fields with edited values
        photoToReplace.title = photo.title;
        photoToReplace.location.city = photo.location.city;
        photoToReplace.location.country = photo.location.country;
        // update state
        this.setState( {photos: copyPhotos } );
    }
    
    addToFavs = (photo) => {
        //1. retrieve data from state
        const data = this.state.favs;
        //2. modify data
        data.push({photo});
        //3. add back to state
        this.setState({favs:data});
    }
    
    render() {
        return (    
            <main>
                <HeaderApp />
                <Route path='/' exact component={Home} />
                <Route path='/home' exact component={Home} />
                <Route path='/about' exact component={About} />
                <Route path='/browse' exact
                    render={ (props) =>
                        <React.Fragment>
                            <Favorites photos={this.state.favs} />
                            <PhotoBrowser
                                photos={this.state.photos}
                                updatePhoto={this.updatePhoto}
                                addToFavs={this.addToFavs} />
                        </React.Fragment>
                    }
                />
            </main>
        );
    }
}

export default App;
