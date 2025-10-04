import React  from "react";

interface OrganizationContextModel {
  organization: string;
  setOrganization: (organization: string) => void;
  pageIndex: number;
  setPageIndex: (pageIndex: number) => void;
}

export const organizationContext = React.createContext<OrganizationContextModel>({
  organization: "lemoncode",
  setOrganization: () => {},
  pageIndex: 1,
  setPageIndex: () => {},
});