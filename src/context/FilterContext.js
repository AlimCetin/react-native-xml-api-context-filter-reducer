///Filter
import React, { createContext, useContext, useReducer } from "react";

export const FilterContext = createContext();
export const useFilterContext = () => useContext(FilterContext);
///gerekli ilk stateler buraya yazılacak
const initialState = {
  aliCetin: 1,
  currency: "",
  sortType: "asc",
};

//reducer baglantısı
const reducer = (state, action) => {
  switch (action.type) {
    case "FilterContext_UPDATE_STATE":
      let value = action.payload;
      return { ...state, [action.key]: value };
    default:
      console.error(`${action.type} ->Action Not Found`);
      return state;
  }
};

///Contex Provider
const FilterContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateState = (key, value) => {
    dispatch({
      type: "FilterContext_UPDATE_STATE",
      payload: value,
      key: key,
    });
  };

  return (
    <FilterContext.Provider
      value={{
        updateState,
        state,
      }}
      displayName="FilterContext"
    >
      {props.children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
