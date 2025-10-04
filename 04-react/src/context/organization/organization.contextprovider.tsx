import React, { type PropsWithChildren } from "react";

import { organizationContext } from "./organization.context";

export const OrganizationContextProvider: React.FC<PropsWithChildren> = ({ children }) => {

    const [organization,setOrganizationState] = React.useState("lemoncode");
    const [pageIndex,setPageIndexState] = React.useState(1);

    const setOrganization = React.useCallback((newOrganization: string) => {
        setOrganizationState(newOrganization);
    }, []);

    const setPageIndex = React.useCallback((newPageIndex: number) => {
        setPageIndexState(newPageIndex);
    }, []);

  return (
    <organizationContext.Provider
      value={{
        organization,
        setOrganization,
        pageIndex,
        setPageIndex
      }}
    >
      {children}
    </organizationContext.Provider>
  );
}