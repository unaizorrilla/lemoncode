import { AppLayout } from '@/layout';
import { OrganizationDetailContainer } from '@/pods';
import React from 'react'

export const OrganizationDetail: React.FC = () => {
    return (
        <>
            <AppLayout>
               <OrganizationDetailContainer />
            </AppLayout>
        </>);
}
