import React from 'react';


const Box = (props) => {
  const { title, item } = props;

  return (
    <div className='box'>
      <h1>{title}</h1>
      {item && (
        <img className="item-img" src={item.img} alt={item.name} />
      )}
      <h2>Win</h2>
    </div>
  );
};

export default Box;
