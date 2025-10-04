import React from 'react';

import { usePagination } from './hooks/usePagination';
import { useGitHub } from './hooks/useGitHub';
import { organizationContext } from '@/context';

import { OrganizationListComponent } from './organizationList.component';


export const OrganizationListContainer: React.FC = () => {

    const { organization, setOrganization, setPageIndex } = React.useContext(organizationContext);
    const { githubMembers, isLoading, error } = useGitHub(organization);
    const { paginatedMembers, currentPage, totalPages, handlePageChange } = usePagination({ data: githubMembers });

    const onOrganizationChange = (org: string) => {
        
        // reset to new organization and first page
        setOrganization(org);
        setPageIndex(1);
        handlePageChange(1);
    }

    return (
        <>
            <OrganizationListComponent
                organization={organization}
                members={paginatedMembers}
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                onOrganizationChange={onOrganizationChange}
                isLoading={isLoading}
                error={error}
            />
        </>
    );
}