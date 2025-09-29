import React from 'react';
import { Link } from 'react-router-dom';

import type { GitHubMember } from '@/api';

interface Props {
    user: GitHubMember | null;
    organization?: string,
    pageIndex: number,
    isLoading: boolean,
    error?: string | null
}

export const OrganizationDetailComponent: React.FC<Props> = ({ user, organization, pageIndex, isLoading, error }) => {
    return (
        <>

            <h1>Organization User Detail</h1>

            {error && (
                <div style={{ color: 'red', padding: '10px', backgroundColor: '#ffe6e6', border: '1px solid #ffcccc', borderRadius: '4px', margin: '10px 0' }}>
                    <strong>Error:</strong> {error}
                </div>
            )}

            {isLoading ? (
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    Loading user data...
                </div>
            ) : (
                <>
                    <div>{user ? user.login : 'Loading...'}</div>
                    <div>{user ? user.id : ''}</div>
                    <div>{user ? user.node_id : ''}</div>
                    <div>{user ? <img src={user.avatar_url} alt="avatar" width={50} /> : ''}</div>
                    <div>{user ? user.url : ''}</div>
                    <div>{user ? user.html_url : ''}</div>
                    <div>{user ? user.followers_url : ''}</div>
                    <div>{user ? user.following_url : ''}</div>
                    <div>{user ? user.gists_url : ''}</div>
                    <div>{user ? user.starred_url : ''}</div>
                    <div>{user ? user.subscriptions_url : ''}</div>
                    <div>{user ? user.organizations_url : ''}</div>
                    <div>{user ? user.repos_url : ''}</div>
                    <div>{user ? user.events_url : ''}</div>
                    <div>{user ? user.received_events_url : ''}</div>
                    <div>{user ? user.type : ''}</div>
                    <div>{user ? user.user_view_type : ''}</div>
                    <div>{user ? user.site_admin.toString() : ''}</div>

                    <Link
                        to="/organization"
                        state={{ organization: organization, pageIndex: pageIndex }}
                    >
                        Back to list page
                    </Link>
                </>
            )}
        </>
    );
}