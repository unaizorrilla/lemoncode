import React from 'react';

import { useGitHub } from './hooks/useGitHub';
import { useNavigationState } from './hooks/useNavigationState';
import { organizationContext } from '@/context';
import { OrganizationDetailComponent } from './organizationDetail.component';

export const OrganizationDetailContainer: React.FC = () => {

    const { userId } = useNavigationState();
    const { organization } = React.useContext(organizationContext);
    const { user, isLoading, error } = useGitHub(userId, organization);

    return (
        <>
            <OrganizationDetailComponent user={user} isLoading={isLoading} error={error} />
        </>);
} 