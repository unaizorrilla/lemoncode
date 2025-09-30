import React from "react";

import Autocomplete from '@mui/material/Autocomplete';
import { TextField, Button } from "@mui/material";

interface InputOrganizationComponentProps {
    organization: string;
    onOrganizationChange: (org: string) => void;
}

export const InputOrganizationComponent: React.FC<InputOrganizationComponentProps> = ({ organization, onOrganizationChange }) => {

    const [org, setOrg] = React.useState(organization);
    
    return (
            <div className="input-organization">

                <Autocomplete
                    id="auto-complete-search"
                    freeSolo
                    style={{ width: 300 }}
                    options={['lemoncode', 'google', 'microsoft', 'facebook', 'amazon']}
                    onChange={(_, value) => setOrg(value || '')}
                    value={org}
                    renderInput={
                        (params) => (
                            <TextField {...params} label="Organization" variant="outlined"  />
                        )
                    } />

                <Button variant="contained" onClick={() => onOrganizationChange(org)}>Search</Button>
            </div>
        );
}