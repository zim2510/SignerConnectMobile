import { useContext, useState } from "react";
import { motion } from "framer-motion";
import SearchSortFilter from "./SearchSortFilter";
import Pagination from "./Pagination";
import { DataGridContext } from "./data-grid-context";
import { useNavigate } from "react-router-dom";

export default function DataGrid() {
  const dataGridContext = useContext(DataGridContext);
  const navigate = useNavigate();
  const {
    data,
    totalPages,
    currentPage,
    startIndex,
    endIndex,
    setCurrentPage,
  } = dataGridContext;

  let currentData = data.slice(startIndex, endIndex + 1);

  const handleOpen = (orderId) => {
    navigate(`/fileStatus/${orderId}`);
  } 

  return (
    <>
      <SearchSortFilter />
      <div className="flex flex-col items-center mt-3">
        {currentData.map((row) => {
          return (
            <div
              key={row.orderId}
              className="w-full flex flex-col items-center pt-2"
            >
              <div className="flex justify-between w-5/6 text-xs md:text-sm">
                <div className="p-2 flex flex-col items-start text-start">
                  <p>{row.fileNumber}</p>
                  <p>{row.productName}</p>
                  <p>{row.lenderName}</p>
                  <p>Signing Date: {row.signingDate}</p>
                </div>
                <div className="p-2 flex flex-col items-end text-end">
                  <p>{row.clientName}</p>
                  <p>{row.addressLineOne}</p>
                  <p>{row.addressLineTwo}</p>
                </div>
              </div>
              <div className="w-5/6 p-2 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-zinc-800 text-white hover:bg-black px-2 py-1 border-black border rounded-md text-sm md:text-base"
                  onClick={() => handleOpen(row.orderId)}
                >
                  Open
                </motion.button>
              </div>
              <div className="border-t w-5/6"></div>
            </div>
          );
        })}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          startIndex={startIndex + 1}
          endIndex={endIndex + 1}
          totalRowCount={data.length}
        />
      </div>
    </>
  );
}
