import React from 'react';
import { gitHub } from '@/api';
import type { GitHubMember } from '@/api';

export const useGitHub = (userId: string | undefined, organization: string) => {

    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [user, setUser] = React.useState<GitHubMember | null>(null);

    React.useEffect(() => {
    
            setIsLoading(true);
            setError(null);
    
            gitHub.getOrganizationUser(userId || '')
                .then(data => {
                    setIsLoading(false);
                    setError(null);
                    setUser(data);
                })
                .catch(error => {
                    setError(error.message);
                    setIsLoading(false);
                });
        }, [userId, organization]);

        return { user, isLoading, error }
}