import { Routes, Route } from 'react-router';
import { Organization } from '@/scenes/organization';
import { OrganizationDetail } from '@/scenes/organizationDetail';

import { switchRoutes } from '@/router';
import { OrganizationContextProvider } from '@/context';


export const OrganizationGroup = () => {
    return (
        <OrganizationContextProvider>
            <Routes>
                <Route index element={<Organization />} />
                <Route path={switchRoutes.List} element={<Organization />} />
                <Route path={switchRoutes.Detail} element={<OrganizationDetail />} />
            </Routes>
        </OrganizationContextProvider>
    )
}
