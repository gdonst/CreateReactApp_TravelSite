import React from "react";

class FavoriteItem extends React.Component {
    render() {
        const imgURL = `https://www.randyconnolly.com/funwebdev/3rd/images/travel/square150/${this.props.photo.filename}`;
        return (
            <div>
                <figure>
                    <img src={imgURL} className="photoThumb" title={this.props.photo.title} alt={this.props.photo.title} />
                </figure>
            </div>
            );
        }
}

export default FavoriteItem