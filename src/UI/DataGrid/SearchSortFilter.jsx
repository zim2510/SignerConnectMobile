import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal";
import { useState, useContext } from "react";
import SearchSortFilterPopup from "./SearchSortFilterPopup";
import { DataGridContext } from "./data-grid-context";

export default function SearchSortFilter() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { searchText, setSearchText } = useContext(DataGridContext);

  return (
    <>
      <AnimatePresence>
        {isPopupOpen && (
          <Modal position="bottom" onClose={() => setIsPopupOpen(false)}>
            <SearchSortFilterPopup />
          </Modal>
        )}
      </AnimatePresence>
      <div className="sticky top-0 bg-white">
        <div className="flex w-full justify-center py-2">
          <div className="flex w-full md:w-5/6 justify-between items-center">
            <div className="ml-2">
              <button
                className="bg-zinc-800 text-white hover:bg-black px-2 py-1 border-black border rounded-md"
                onClick={() => setIsPopupOpen(true)}
              >
                <FilterAltIcon />
                <span className="ml-1 text-xs md:text-base">Sort & Filter</span>
              </button>
            </div>

            <div className="relative mr-0 border-b rounded-sm">
              <input
                className="py-1 pl-4 pr-10 outline-none"
                placeholder="Search"
                onChange={(e) => setSearchText(e.target.value)}
              ></input>
              <div className="absolute right-3 bottom-2 w-4">
                <svg
                  className=""
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="border-t w-11/12"></div>
        </div>
      </div>
    </>
  );
}
