import React, { useEffect, useState } from 'react';
import Loading from '../Loading'
import Chart from './Chart'

export default function Main(id){
    const [data, setData] = useState(null);
  
    useEffect(() => {
        const newSocket = new WebSocket('wss://ws3.indodax.com/ws/');
    
        newSocket.onopen = () => {
            console.log('Connected to WebSocket server');
            sendRequest(newSocket);
        };
    
        newSocket.onmessage = (event) => {
            console.log('Received message:', event.data);
            setData(JSON.parse(event.data));
        };
    
        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
    
        newSocket.onclose = (event) => {
            console.log('WebSocket closed:', event);
        };
    
        return () => {
            newSocket.close();
        };
    }, []);
  
    const sendRequest = (newSocket) => {
        const authRequest = {
            "params": {
                "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE5NDY2MTg0MTV9.UR1lBM6Eqh0yWz-PVirw1uPCxe60FdchR8eNVdsskeo"
            },
            "id": 1
        };
    
        if (newSocket.readyState === WebSocket.OPEN) {
            newSocket.send(JSON.stringify(authRequest));
            subscribeToChannel(newSocket);
        }
    };

    const subscribeToChannel = (newSocket) => {
        const subscribeRequest = {
            "method": 1,
            "params": {
                "channel": `chart:tick-${id.id}`
            },
            "id": 2
        };
    
        if (newSocket.readyState === WebSocket.OPEN) {
            newSocket.send(JSON.stringify(subscribeRequest));
        }
    };
    
    return (
        <div>
            {data ? (
                <Chart data={data} />
            ) : (
                <Loading />
            )}
      </div>
    );
}