import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ totalItem, itemPage, currentPage, onPaginate }) => {
  const totalPages = Math.ceil(totalItem / itemPage);
  const pages = _.range(1, totalPages + 1);

  if (totalPages === 1) return null;

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            style={{ cursor: "pointer" }}
            onClick={() => onPaginate(page)}
            key={page}
            className={currentPage === page ? "page-item active" : "page-item"}
          >
            <a href="/#" className="page-link">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalItem: PropTypes.number.isRequired,
  itemPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPaginate: PropTypes.func.isRequired
};

export default Pagination;
