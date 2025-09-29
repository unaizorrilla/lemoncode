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
            <h1>Organization List Container</h1>
            <InputOrganizationComponent onOrganizationChange={onOrganizationChange} organization={organization}/>
            
            {error && (
                <div style={{ color: 'red', padding: '10px', backgroundColor: '#ffe6e6', border: '1px solid #ffcccc', borderRadius: '4px', margin: '10px 0' }}>
                    <strong>Error:</strong> {error}
                </div>
            )}
            
            {isLoading ? (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    Loading organization members...
                </div>
            ) : (
                <>
                    <ListComponent members={members} organization={organization} pageIndex={currentPage} />
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