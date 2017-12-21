import React from 'react';
import{ Link } from 'react-router';

const PhotoGrid = React.createClass({
    render() {
        return (
            <div className="photo-grid">
                <h1><Link to="/">PhotoGrid</Link></h1>
            </div>
        )
    }
})

export default PhotoGrid;
