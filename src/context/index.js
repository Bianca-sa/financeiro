import { createContext, useState } from 'react';

const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [inputSelected, setInputSeleted] = useState();
  const [outputSelected, setOutputSelected] = useState();
  const [name, setName] = useState()
  const [price, setPrice] = useState()
  const [category, setCategory] = useState()
  const [openModal, setOpenModal] = useState()
  const [dataArray, setDataArray] = useState([])

  return (
    <Context.Provider
      value={{
        inputSelected,
        setInputSeleted,
        outputSelected,
        setOutputSelected,
        name,
        setName,
        price,
        setPrice,
        category,
        setCategory,
        dataArray,
        setDataArray,
        openModal,
        setOpenModal
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context;