import React from 'react';
import Main from '../componens/NotFound/NotFound';

const NotFound: React.FC = () => {      
    return (
        <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
            <Main title={'Page Not Found'}/>
        </div>
    );
}

export default NotFound;