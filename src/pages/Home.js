import { React } from 'react';

import Header from '../componens/Home/Header';
import Content from '../componens/Home/Content';

export default function Home() {      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Header/>
                <Content/>
            </div>
        </div>
    );
}