import React, { useEffect, useState } from 'react';
import { WebSocketData } from '../../interfaces/WebSocketData';
import Chart from './Chart';
import Loading from '../common/Loading';

interface MarketProps {
  id?: string;
}

const Market: React.FC<MarketProps> = ({ id }) => {
  const [data, setData] = useState<WebSocketData | null>(null);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sendRequest = (newSocket: WebSocket) => {
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

  const subscribeToChannel = (newSocket: WebSocket) => {
    const subscribeRequest = {
      "method": 1,
      "params": {
        "channel": `chart:tick-${id}`
      },
      "id": 2
    };

    if (newSocket.readyState === WebSocket.OPEN) {
      newSocket.send(JSON.stringify(subscribeRequest));
    }
  };

  return (
  <div>
    {data 
      ? <Chart data={data}/> 
      : <Loading/>
    }
  </div>
  );
}

export default Market;