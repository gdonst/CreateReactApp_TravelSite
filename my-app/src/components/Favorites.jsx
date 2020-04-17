import React from "react";
import FavoriteItem from './FavoriteItem.jsx';

class Favorites extends React.Component {
    render() {
        return (
           <section className="favorites">
                <h1 className="title is-4">❤ Favorites</h1>  
                {this.props.photos && this.props.photos.map( (p) => <FavoriteItem photo={p.photo} key={p.photo.id} />)}
            </section> 
        );
    }
}

export default Favorites