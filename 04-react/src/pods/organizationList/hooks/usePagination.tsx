import React from 'react';
import type { GitHubMembers } from '@/api';

export const  usePagination = (params: { initialPage: number, data: GitHubMembers }) => {
    const pageSize = 5;

    const { initialPage, data } = params;
    const [currentPage, setCurrentPage] = React.useState(initialPage);

    const paginatedMembers = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePageChange = (page: number) => {

        if (page < 1 || page === currentPage || page > totalPages) {
            return;
        }

        setCurrentPage(page);
    }

    return {
        paginatedMembers,
        currentPage,
        totalPages,
        handlePageChange
    }
}