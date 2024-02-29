import { createContext, useState } from "react";

export const FruitContext = createContext({})

export const FruitProvider = ({ children }) => {

  const [fruitList, setFruitList] = useState([]);

  const addFruit = (fruit) => {
    const newFruit = { ...fruit, id: crypto.randomUUID() };
    setFruitList([...fruitList, newFruit]);
  };

  const removeFruit = (fruitId) => {
    const newFruitList = fruitList.filter(fruit => fruit.id !== fruitId);
    setFruitList(newFruitList);
  }

  return (
    <FruitContext.Provider value={{ fruitList, addFruit, removeFruit }}>
      {children}
    </FruitContext.Provider>
  )
}