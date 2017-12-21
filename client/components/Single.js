import React from 'react';
import{ Link } from 'react-router';

const Single = React.createClass({
    render() {
        return (
            <div class="single-photo">
                <h1><Link to="/">Single</Link></h1>
            </div>
        )
    }
})

export default Single;
