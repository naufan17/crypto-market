import React from 'react';
import Header from '../../components/layout/Header';

const NotFound: React.FC = () => {      
  return (
    <div className="bg-gradient-to-r from-indigo-100 min-h-screen">
      <Header 
        title='404 - Page Not Found'
        subtitle="The page you're looking for does not exist."
      />
    </div>
  );
}

export default NotFound;