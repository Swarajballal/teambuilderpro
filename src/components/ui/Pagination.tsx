import { useState } from 'react';
import Container from './container';

interface PaginationProps {
    onPageChange: (pageNumber: number) => void;
    totalPages: number;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange, totalPages }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPagesToShow = 10;

  const handlePageClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <Container>
        <nav aria-label="Page navigation example hidden md:block">
          <ul className="inline-flex -space-x-px md:text-base md:h-10 h-5 text-sm">
            <li>
              <button onClick={handlePrevClick} className="flex items-center justify-center px-2 h-8 text-xs leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:px-4 md:h-10 md:text-base">Previous</button>
            </li>
            {pageNumbers.map(number => (
              <li key={number}>
                <button onClick={() => handlePageClick(number)} className={`flex items-center justify-center px-2 h-8 text-xs ${currentPage === number ? 'text-blue-600 bg-blue-50' : 'text-gray-500 bg-white'} border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:px-4 md:h-10 md:text-base`}>{number}</button>
              </li>
            ))}
            <li>
              <button onClick={handleNextClick} className="flex items-center justify-center px-2 h-8 text-xs leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:px-4 md:h-10 md:text-base">Next</button>
            </li>
          </ul>
        </nav>
      </Container>
    </div>
  );
};

export default Pagination;
