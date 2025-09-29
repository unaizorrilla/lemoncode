import React from 'react';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div className="layout-app-container">
                <div className="layout-app-header">[username]
                </div>
                {children}
            </div>
        </>);
}