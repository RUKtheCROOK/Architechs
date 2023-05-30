// this is the feed page that will use a feed component named FeedComponent to simulate a feed
// import the react library
import React from 'react';

// import the feed component
import FeedComponent from '../components/feedComponent';

function Feed(){
    return(
        <div className="feed container">
            <h1>Feed Page</h1>
            <FeedComponent />
        </div>
    )
}

export default Feed;
