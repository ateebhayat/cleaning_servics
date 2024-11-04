//

import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './pagination.scss';

const PaginationComponent = ({ currentPage, totalCount, onPageChange }) => {
    const totalPages = Math.ceil(totalCount / 10);
    const maxVisiblePages = 2;

    const handlePageChange = (page) => {
        onPageChange(page);
    };

    const renderPaginationItems = () => {
        const items = [];
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage < maxVisiblePages - 1) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        if (startPage > 1) {
            items.push(<Pagination.Ellipsis key="ellipsis-start" disabled />);
        }

        for (let page = startPage; page <= endPage; page++) {
            items.push(
                <Pagination.Item key={page} active={page === currentPage} onClick={() => handlePageChange(page)}>
                    {page}
                </Pagination.Item>
            );
        }

        if (endPage < totalPages) {
            items.push(<Pagination.Ellipsis key="ellipsis-end" disabled />);
        }

        return items;
    };

    return (
        <Pagination className="custom-pagination">
            <button className="navigation-btn prev" type="button" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                Previous
            </button>
            {renderPaginationItems()}
            <button className="navigation-btn next" type="button" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
            </button>
        </Pagination>
    );
};

export default PaginationComponent;
