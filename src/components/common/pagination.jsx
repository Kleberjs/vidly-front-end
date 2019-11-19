import React from "react";
import _ from "lodash";

const Pagination = ({ totalItem, itemPage, currentPage, onPaginate }) => {
  const totalPages = Math.ceil(totalItem / itemPage);
  const pages = _.range(1, totalPages + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            onClick={() => onPaginate(page)}
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a className="page-link">{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
