import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router';

import {OrganizationGroup} from './organization/routes.organization'

export const Router: React.FC = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/*" element={<OrganizationGroup />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}