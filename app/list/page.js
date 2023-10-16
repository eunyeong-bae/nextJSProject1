'use client'

import React, { useState } from 'react'

const page = () => {
    let products = ['Tomatoes','Pasta','Coconut'];
  let [amount, setAmount] = useState([0,0,0]);
  
  const changeAmount = (type, index) => {
    let copy = [...amount];
    copy[index] = type === 'plus' ? copy[index] + 1 : copy[index] - 1;
    setAmount(copy);
  };

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      { products.map((item, i) => {
        return (
            <div className='food' key={i}>
                <img src={`/food${i}.png`} className='food-img'/>
                <h4>{item} $40</h4>
                <button onClick={() => { changeAmount('minus',i)}}>-</button>
                <span>{amount[i]}</span>
                <button onClick={() => {changeAmount('plus',i)}}>+</button>
            </div>
        )
      })}
    </div>
  )
}

export default page
