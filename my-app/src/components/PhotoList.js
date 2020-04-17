import React from "react";
import PhotoThumb from './PhotoThumb.jsx';
class PhotoList extends React.Component {
    render() {
        if (this.props.photos.length > 1) {
            return (
                <article className="photos">
                { this.props.photos.map( (p) => <PhotoThumb photo={p} key={p.id} showImageDetails={this.props.showImageDetails} addToFavs={this.props.addToFavs} /> )} 
                </article>
            );
        } else
            return null; 
    }
}
export default PhotoList