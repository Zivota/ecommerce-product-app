import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";

const App = () => {
  const [itemCounter, setItemCounter] = useState(0);

  const [addInCart, setAddInCart] = useState({
    amount: 0,
    isInCart: false,
  });

  const [scWidth, setScWidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setScWidth({
        width: window.innerWidth,
      });
    }

    const timer = setTimeout(() => {
      window.addEventListener("resize", handleResize);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  });

  const addItem = () => {
    if (itemCounter < 5) {
      setItemCounter((prevItemCounter) => prevItemCounter + 1);
    }
  };

  const removeItem = () => {
    if (itemCounter > 0) {
      setItemCounter((prevItemCounter) => prevItemCounter - 1);
    }
  };

  const addedInCart = () => {
    if (itemCounter > 0) {
      setAddInCart({
        amount: itemCounter,
        isInCart: true,
      });
    }
  };

  const removeFromCart = () => {
    setAddInCart({
      amount: 0,
      isInCart: false,
    });
  };

  return (
    <div className="App">
      <Header
        scWidth={scWidth}
        cartItemAmount={itemCounter}
        addInCart={addInCart}
        removeFromCart={removeFromCart}
      />
      <Hero
        scWidth={scWidth}
        cartItemAmount={itemCounter}
        onRemove={removeItem}
        onAdd={addItem}
        addInCart={addInCart}
        addedInCart={addedInCart}
      />
    </div>
  );
};

export default App;
