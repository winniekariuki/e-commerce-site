import React from 'react';

const NoItems = () => {
 return (
   <div> <div>
   <h6>Nothing in the shopping cart yet</h6>
   <Link className="btn btn-danger" to="/"> Go back to shop</Link>
</div></div>
 )
}

export default NoItems;