import classes from "./Card.module.css";

export default function Card({
  // eslint-disable-next-line react/prop-types
  card: { id, name, price, haveUser,  haveStore, brand, article},
}) {




  return (
    <li className={classes.card}>
      <div className={classes.card__header}>
       <img src="../public/motor.png" alt="картинка"  className={classes.card__img}/>
       <img src="../public/heart.png" alt="лайк"  className={classes.card__heart}/>
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
          <img src="" alt="" className={classes.card__captionCountLogo}/>
          <span className={classes.card__captionCountValue}>
            {haveStore}
            <p className={classes.card__captionCountValueText}>шт</p>
          </span>
        </div>
      </div>

      {haveUser ? (
        <div>
        <span>{price}</span>
        <div>
          <button></button>
          <span>{haveUser}</span>
          <button></button>
        </div>
        <img src="" alt="" />
      </div>
        
      ) : (
        <div>
          <span>{price}</span>
          <span></span>
          <span></span>
        </div>  
      )}
    </li>
  );
}
