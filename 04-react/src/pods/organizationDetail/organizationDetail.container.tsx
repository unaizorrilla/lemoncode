import React from 'react';

import { useGitHub } from './hooks/useGitHub';
import { useNavigationState } from './hooks/useNavigationState';

import { OrganizationDetailComponent } from './organizationDetail.component';

export const OrganizationDetailContainer: React.FC = () => {

    const { userId, organization, pageIndex } = useNavigationState();
    const { user, isLoading, error } = useGitHub(userId, organization);

    return (
        <>
            <OrganizationDetailComponent user={user} organization={organization} pageIndex={pageIndex} isLoading={isLoading} error={error} />
        </>);
} 