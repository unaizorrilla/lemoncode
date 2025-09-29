import React from "react";

interface InputOrganizationComponentProps {
    organization: string;
    onOrganizationChange: (org: string) => void;
}
export const InputOrganizationComponent: React.FC<InputOrganizationComponentProps>= ({organization, onOrganizationChange}) => {
    const [org, setOrg] = React.useState(organization);
    return (
        <div>
            <input type="text" placeholder={organization} value={org} onChange={(e) => setOrg(e.target.value)} />
            <button onClick={() => onOrganizationChange(org)}>Load</button>
        </div>);
}