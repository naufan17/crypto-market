import React from 'react';
import Header from '../../components/common/Header';

const NotFound: React.FC = () => {      
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Header title={'Page Not Found'}/>
    </div>
  );
}

export default NotFound;