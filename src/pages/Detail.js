import { React } from 'react';
import { useParams } from 'react-router-dom';

import Main from '../componens/Detail/Main';
import Chart from '../componens/Detail/Chart';

export default function Detail() {
    const {id} = useParams();
      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Main
                id = {id}
            />
            <Chart
                id = {id}
            />
        </div>
    );
}