import React from 'react';
import type { GitHubMembers } from '@/api';
import { organizationContext } from '@/context';

export const  usePagination = (params: { data: GitHubMembers }) => {
    const pageSize = 5;

    const {  data } = params;
    const { pageIndex, setPageIndex } = React.useContext(organizationContext);
    const paginatedMembers = data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    const totalPages = Math.ceil(data.length / pageSize);

    const handlePageChange = (page: number) => {

        if (page < 1 || page === pageIndex || page > totalPages) {
            return;
        }

        setPageIndex(page);
    }

    return {
        paginatedMembers,
        currentPage: pageIndex,
        totalPages,
        handlePageChange
    }
}