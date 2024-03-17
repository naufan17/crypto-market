import { React } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../componens/Detail/Main';

export default function Detail() {
    const {id} = useParams();
      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <Main
                    id = {id}
                />
            </div>
        </div>
    );
}