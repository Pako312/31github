import React from 'react'
import styles from "./style.module.css"

const FoodCard = (food) => {
  return (
    
    <div className={styles["foodCard_item"]}>
    <div className={styles['image-wrap']}>
      <img src={food.data.image} alt="plov">
      </img>
    </div>
    <div className='foodInfo'>
      <div className='title'>
        <h2>{food.data.title}</h2>
      </div>
      <div className='price'>
        <h2>{food.data.price}</h2>
      </div>
      <div className='cost'>
        <h2>
          {food.data.cost}
        </h2>
      </div>
    </div>
  </div>
  )
}

export default FoodCard;


