import React from 'react';

const Layout = ({children}) => {
    return (
        <div className='main'>
            <div className='tracker_area'>
                {children}
            </div> 
        </div>
    );
};

export default Layout;