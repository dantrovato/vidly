import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

// const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
//   const pagesCount = Math.ceil(itemsCount / pageSize);
//   if (pagesCount === 1) {
//     return null;
//   }

//   const pages = _.range(1, pagesCount + 1);

//   return (
//     <nav aria-label="Page navigation example">
//       <ul className="pagination">
//         {pages.map((page) => {
//           return (
//             <li
//               className={
//                 page === currentPage ? "page-item active" : "page-item"
//               }
//               key={page}
//             >
//               <button
//                 // originally an anchor but react complains
//                 className="page-link"
//                 onClick={() => onPageChange(page)}
//                 // href="#"
//               >
//                 {page}
//               </button>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// Pagination.propTypes = {
//   itemsCount: PropTypes.number.isRequired,
//   pageSize: PropTypes.number.isRequired,
//   currentPage: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

// export default Pagination;

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  // get number of pages by dividing the number of items (9) by the page size (4) === 2.25
  const pagesCount = Math.ceil(itemsCount / pageSize);

  if (pagesCount === 1) return null;

  // use lodash to get an array of numbers from (page) 1 to pages count
  const pages = _.range(1, pagesCount + 1);

  console.log(currentPage);
  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={page === currentPage ? "page-item active" : "page-item"}
            key={page}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
