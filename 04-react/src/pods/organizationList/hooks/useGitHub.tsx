import React from 'react'

import { gitHub } from '@/api';
import type { GitHubMembers } from '@/api';

export const useGitHub = (organization: string) => {
    const [githubMembers, setGithubMembers] = React.useState<GitHubMembers>([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {

        setIsLoading(true);
        setError(null);

        gitHub.getOrganizationMembers(organization)
            .then(data => {
                setGithubMembers(Array.isArray(data) ? data : []);
                setIsLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setGithubMembers([]);
                setIsLoading(false);
            });
    }, [organization]);

    return { githubMembers, isLoading, error }
}