import React from 'react'

import { Organization } from '@/scenes/organization';
import { OrganizationDetail } from '@/scenes/organizationDetail';
import { BrowserRouter, Routes, Route  } from 'react-router';

import { switchRoutes } from './routes';

export const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Organization />} />
                    <Route path={switchRoutes.List} element={<Organization />} />
                    <Route path={switchRoutes.Detail} element={<OrganizationDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}