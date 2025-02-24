function getPageNumbers(currentPage, totalPages) {
  const pages = [];
  let start, end;

  if (currentPage - 2 < 1) {
    start = 1;
    end = Math.min(5, totalPages);
  } else if (currentPage + 2 > totalPages) {
    start = Math.max(1, totalPages - 4);
    end = totalPages;
  } else {
    start = currentPage - 2;
    end = currentPage + 2;
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  startIndex,
  endIndex,
  totalRowCount,
}) {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const pageButtonCss =
    "inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0";

  return (
    <>
    <div className="flex w-full justify-center">
      <div className="flex w-5/6 justify-between pt-3">
        <div className="hidden md:flex justify-begin items-center w-3/6 mb-5">
          <p className="text-sm text-gray-700">
            Showing&nbsp;
            <span className="font-medium">{startIndex}</span>
            &nbsp;to&nbsp;
            <span className="font-medium">{endIndex}</span>
            &nbsp;of&nbsp;
            <span className="font-medium">{totalRowCount}</span>
            &nbsp;results&nbsp;
          </p>
        </div>
        <div className="flex justify-center md:justify-end items-center w-full md:w-3/6 mb-3 md:mb-5">
          <button
            className={pageButtonCss}
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            &lt;&lt;
          </button>

          <button
            className={pageButtonCss}
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {pageNumbers.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={
                currentPage === pageNumber
                  ? "z-10 inline-flex items-center bg-black px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  : `hidden md:flex ${pageButtonCss}`
              }
              disabled={currentPage === pageNumber}
            >
              {pageNumber}
            </button>
          ))}
          <button
            className={pageButtonCss}
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          <button
            className={pageButtonCss}
            onClick={() => setCurrentPage(totalPages)}
            disabled={currentPage === totalPages}
          >
            &gt;&gt;
          </button>
        </div>
      </div>
    </div>
    </>
  );
}
