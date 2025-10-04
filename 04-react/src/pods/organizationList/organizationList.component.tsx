import { Typography } from "@mui/material";
import { InputOrganizationComponent } from "./components/input.component";
import { ListComponent } from "./components/list.component";
import { PaginationComponent } from "./components/pagination.component";
import type { GitHubMembers } from "@/api";

interface OrganizationListProps {
    organization: string,
    members: GitHubMembers,
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    error: string | null;
    onPageChange: (page: number) => void;
    onOrganizationChange: (org: string) => void;
}

export const OrganizationListComponent: React.FC<OrganizationListProps> = ({
    organization,
    members,
    currentPage,
    totalPages,
    onPageChange,
    onOrganizationChange,
    isLoading,
    error
}) => {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Organization List
            </Typography>

            <InputOrganizationComponent onOrganizationChange={onOrganizationChange} organization={organization} />

            {error && (
                <div className="error">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {isLoading ? (
                <div className="loading">
                    <Typography variant="body1">
                        Loading organization members...
                    </Typography>
                </div>
            ) : (
                <>
                    <ListComponent members={members} />
                    <PaginationComponent
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={onPageChange}
                    />
                </>
            )}
        </>
    );
}