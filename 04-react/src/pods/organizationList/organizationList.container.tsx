import React from 'react';

import { useNavigationState } from './hooks/useNavigationState';
import { usePagination } from './hooks/usePagination';
import { useGitHub } from './hooks/useGitHub';

import { OrganizationListComponent } from './organizationList.component';


export const OrganizationListContainer: React.FC = () => {
    
    const { initialOrganization, initialPageIndex } = useNavigationState();
    const [organization, setOrganization] = React.useState(initialOrganization);

    const { githubMembers, isLoading, error } = useGitHub(organization);
    const { paginatedMembers, currentPage, totalPages, handlePageChange } = usePagination({ initialPage: initialPageIndex, data: githubMembers });

    const onOrganizationChange = (org: string) => {
        setOrganization(org);
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