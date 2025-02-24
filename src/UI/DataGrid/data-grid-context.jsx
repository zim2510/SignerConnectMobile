import { createContext, useState, useEffect, useReducer } from "react";
import { useQuery } from "@tanstack/react-query";

export const DataGridContext = createContext({
  data: [],
  itemsPerPage: 10,
  totalPages: 1,
  currentPage: 1,
  startIndex: 0,
  endIndex: 0,
  searchText: "",
  sortColumn: "",
  searchableFields: [],
  setSearchText: () => {},
  setCurrentPage: () => {},
});

const dataGridReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        totalPages: Math.ceil(action.payload.length / state.itemsPerPage),
        currentPage: 1,
        startIndex: Math.min(1, action.payload.length) - 1,
        endIndex: Math.min(state.itemsPerPage, action.payload.length) - 1,
      };
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.payload,
        startIndex: (action.payload - 1) * state.itemsPerPage,
        endIndex: Math.min(
          action.payload * state.itemsPerPage - 1,
          state.data.length - 1
        ),
      };
    case "SET_SEARCH_TEXT":
      return {
        ...state,
        searchText: action.payload,
      };
    default:
      return state;
  }
};

export default function DataGridContextProvider({
  dataSourceFn,
  searchableFields,
  children,
}) {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ["data"],
    queryFn: dataSourceFn,
  });

  const [dataGridState, dataGridDispatch] = useReducer(dataGridReducer, {
    data: [],
    itemsPerPage: 10,
    totalPages: 1,
    currentPage: 1,
    startIndex: 0,
    endIndex: 0,
    searchText: "",
    sortColumn: "",
  });

  useEffect(() => {
    if (isSuccess) {
      dataGridDispatch({
        type: "SET_DATA",
        payload: data,
      });
    }
  }, [isSuccess, data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const setCurrentPage = (page) => {
    dataGridDispatch({
      type: "SET_CURRENT_PAGE",
      payload: page,
    });
  };

  const setSearchText = (text) => {
    dataGridDispatch({
      type: "SET_SEARCH_TEXT",
      payload: text,
    });

    const filteredData = data.filter((row) => {
      return searchableFields.some((field) => {
        return row[field].toLowerCase().includes(text.toLowerCase());
      });
    });

    dataGridDispatch({
      type: "SET_DATA",
      payload: filteredData,
    });
  };

  const ctxValue = {
    data: dataGridState.data,
    itemsPerPage: dataGridState.itemsPerPage,
    totalPages: dataGridState.totalPages,
    currentPage: dataGridState.currentPage,
    startIndex: dataGridState.startIndex,
    endIndex: dataGridState.endIndex,
    searchText: dataGridState.searchText,
    sortColumn: dataGridState.sortColumn,
    searchableFields: searchableFields,
    setCurrentPage: setCurrentPage,
    setSearchText: setSearchText,
  };

  return (
    <DataGridContext.Provider value={ctxValue}>
      {children}
    </DataGridContext.Provider>
  );
}
