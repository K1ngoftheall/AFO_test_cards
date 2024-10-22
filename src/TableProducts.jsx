import React from "react";
import Card from "./Card";

import classes from "./TableProducts.module.css";

function TableProducts({ cards, loaded }) {
  return (
    <div className={classes.main}>
    <h1 className={classes.title}>Товары по акциям</h1>
    <ul className={classes.TableProducts}>
      {loaded ? (
        cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))
      ) : (
        <div>loading...</div>
      )}
    </ul>
    </div>
  );
}

export default TableProducts;
