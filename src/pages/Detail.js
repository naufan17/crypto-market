import { React } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../componens/Detail/Header';
import Main from '../componens/Detail/Main';

export default function Detail() {
    const {id} = useParams();
      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Header
                id = {id}
            />
            <Main
                id = {id}
            />
        </div>
    );
}