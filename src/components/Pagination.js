// Pagination.js

import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex space-x-2">
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`px-2 py-1 rounded ${
            currentPage === pageNumber ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          {pageNumber}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
