import React from "react";
import { Pagination } from "react-bootstrap";

export default function JobsPagination({ page, setPage,hasNextPage }) {
    function addJustPage(amount) {
        setPage(prevPage => prevPage + amount)
    }

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => addJustPage(-1)} />}
            {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            {/* {page < totalPages && <Pagination.Next onClick={() => addJustPage(1)}/>} */}
            {page > 2 && <Pagination.Item onClick={() => addJustPage(-1)}>{page - 1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={() => addJustPage(1)}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={() => addJustPage(1)}/>}

        </Pagination>
    )
}