import classes from "./Card.module.css";
import {useState} from "react";

export default function Card({
  // eslint-disable-next-line react/prop-types
  card: { name, price, haveUser,  haveStore, brand, article, discount},
}) {
  const [count, setCount] = useState(Number(haveUser));
  const increaseCounter = () => {
    setCount(count + 1);
 }
 const deccreaseCounter = () => {
  setCount(count - 1);
}

  return (
    <li className={classes.card}>
      <div className={classes.card__main}>
      <div className={classes.card__header}>
        <div className={classes.card__img}></div>
        <div  className={classes.card__heart}></div>
      </div>

      <div className={classes.card__raiting}></div>

      <p className={classes.card__name}>{name}</p>

      <div className={classes.card__otherInfo}>
       <div className={classes.card__brand}>
         <p className={classes.card__brandName}>Брэнд: </p>
         <span className={classes.card__brandValue}>{brand}</span>
       </div>
       <div className={classes.card__article}>
         <p className={classes.card__articleName}>Артикул: </p>
         <span className={classes.card__articleValue}>{article}</span>
       </div>
      </div>

      <div className={classes.card__caption}>
        <p className={classes.card__captionName}>Цена за шт</p>
        <div className={classes.card__captionCount}>
          <div className={classes.card__captionCountLogo}></div>
          
          <div className={classes.card__captionCountValue}>
            {haveStore}
            <p className={classes.card__captionCountValueText}>шт</p>
          </div>
        </div>
      </div>

      {count ? (
        <div className={classes.card__priceContainer}>
        <span className={classes.card__binPriceDiscount}>{price*(discount / 100)}Р</span>
        <div className={classes.card__binPriceCounter}>
          <button className={classes.card__counterButton}  onClick={deccreaseCounter}>
            <div className={classes.card__counterButtonMinus}></div>
            </button>
          <span className={classes.card__binHaveUser}>{count}</span>
          <button className={classes.card__counterButton} onClick={increaseCounter}>
            <div className={classes.card__counterButtonPlus}></div>
            </button>
        </div>
        <div className={classes.card__bin}></div>
      </div>
        
      ) : (
          <div className={classes.card__buyContainer}>
        <div className={classes.card__priceContainer}>
          <span className={classes.card__priceDiscount}>{price*(discount / 100)}Р</span>
          <span className={classes.card__Discount}>-{discount}%</span>
          <span className={classes.card__price}>{price}Р</span>
          
        </div> 
        <div className={classes.card__bin} onClick={increaseCounter}></div>
        </div> 
      )}
      </div>
    </li>
  );
}
