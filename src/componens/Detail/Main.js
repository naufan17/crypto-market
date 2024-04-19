import React, {useEffect, useState} from 'react';
import io from 'socket.io-client'
import Loading from '../Loading'

export default function Main(id){
    const [socket, setSocket] = useState(true);
    // const [response, setResponse] = useState(null);
    // const [isLoading, setLoading] = useState(true);
    
    useEffect(() => {
        const newSocket = io('wss://ws3.indodax.com/ws/');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });
        // sendRequest();

    return () => {
        newSocket.disconnect();
    };
    }, []);

    // const sendRequest = () => {
    //     const requestData = {
    //         "params": {
    //             "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY2MTg0MTV9.UR1lBM6Eqh0yWz-PVirw1uPCxe60FdchR8eNVdsskeo"
    //         },
    //         "id": 1
    //     };

    //     if (socket) {
    //         socket.emit(requestData);
    //     }    
    // };
    
    // useEffect(() => {
    //     if (socket) {
    //         socket.on('response', (data) => {
    //             setResponse(data);
    //         });
    //     }
    // }, [socket]);

    return (
        <Loading/>
    );
}