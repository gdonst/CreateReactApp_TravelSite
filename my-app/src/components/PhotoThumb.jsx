import React from "react";

class PhotoThumb extends React.Component {
    handleViewClick = () => {
        this.props.showImageDetails(this.props.photo.id);
    }
    
    render() {
        const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${this.props.photo.filename}`;
        return (
            <div className="photoBox" onClick={ this.handleViewClick } >
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                </figure>
                <div>
                    <h3>{this.props.photo.title}</h3>
                    <p>>{this.props.photo.location.city}, {this.props.photo.location.country}</p>
                    <button onClick={ this.handleViewClick }>View</button><button onClick={()=> this.props.addToFavs(this.props.photo) }>❤</button>
                </div>
            </div>
        );
    }
}

export default PhotoThumb