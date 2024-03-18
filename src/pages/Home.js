import { React } from 'react';

import Header from '../componens/Home/Header';
import Main from '../componens/Home/Main';

export default function Home() {      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Header/>
            <Main/>
        </div>
    );
}