import { AppLayout } from '@/layout';
import { OrganizationListContainer } from '@/pods';
import React from 'react'

export const Organization: React.FC = () => {
    return (
        <>
            <AppLayout>
               <OrganizationListContainer />
            </AppLayout>
        </>);

}
