import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componens/Market/Header';
import Main from '../componens/Market/Market';

const Market: React.FC = () => {
    const {id} = useParams();
      
    return (
        <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
            <Header id = {id}/>
            <Main id = {id}/>
        </div>
    );
}

export default Market;