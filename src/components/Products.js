import React from "react";

const ProductsData = ({ state, dispatch }) => {
  const { products, cart } = state;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%",
      }}
    >
      <h1>Products</h1>
      <div className="container">
        {products.map((el) => {
          return (
            <ul key={el.id}>
              <li>
                {el.name}
                {"   "} {el.price}{" "}
                <button
                  onClick={() =>
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        id: el.id,
                        name: el.name,
                        price: el.price,
                      },
                    })
                  }
                >
                  +
                </button>{" "}
                {0} <button  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: el,
                    })
                  }>-</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsData;
