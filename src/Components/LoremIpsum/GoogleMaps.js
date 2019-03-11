import React from 'react';

function GoogleMaps() {

    var style = {
        minHeight: '350px',
      };

    return(
        <div> 
        <iframe title="Google" width="100%" height="100%" frameborder="0" style={ style }
src="https://www.google.com/maps/embed/v1/view?zoom=11&center=41.3851,2.1734&key=AIzaSyB9OSz3XKvj6uLv9jXWfqoaWrM43KUZk6k" allowfullscreen></iframe>
</div>

    )
}

export default GoogleMaps;