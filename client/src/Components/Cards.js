import React, { useEffect, useState } from 'react';
import TranslucentCard from './TranslucentCard';

const Cards = () => {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/get");
      const da = await res.json();
      setdata(da["funds"]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='text-white' style={{
        minHeight:"800px",
        backgroundSize:"cover",
        backgroundImage:"url('https://images.pexels.com/photos/401107/pexels-photo-401107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
    }}>
      <div className="container pt-2">
        <div className="row justify-content-center">
          {data.map((item, index) => (
            <TranslucentCard key={index} address={item.address} title={item.title} desc={item.desc} />
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
