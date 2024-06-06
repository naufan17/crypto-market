import { React } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../componens/Market/Header';
import Main from '../componens/Market/Main';

export default function Market() {
    const {id} = useParams();
      
    return (
        <div className="bg-gradient-to-r from-indigo-100">
            <Header id = {id}/>
            <Main id = {id}/>
        </div>
    );
}