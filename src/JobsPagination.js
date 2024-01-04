import React from "react";
import { Pagination } from "react-bootstrap";

export default function JobsPagination({ page }) {
    function addJustPage(amount) {
        setPage()
    }


    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => addJustPage(-1)} />}
            {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}

        </Pagination>
    )
}