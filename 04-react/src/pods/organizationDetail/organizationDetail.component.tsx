import React from 'react';
import { Link } from 'react-router-dom';

import type { GitHubMember } from '@/api';
import Typography from '@mui/material/Typography';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';

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
            <Typography variant="h4" component="h1" gutterBottom>
                Organization User Detail
            </Typography>

            {error && (
                <div className="error">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {isLoading ? (
                <div className='loading'>
                    Loading user data...
                </div>
            ) : (
                <>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardHeader>
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="ccc">
                                    Rdd
                                </Avatar>
                            }
                            title="User Info"
                        </CardHeader>
                        <CardMedia
                            component="img"
                            height="194"
                            image={user?.avatar_url}
                            alt="User Avatar"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                login:  {user ? user.login : 'Loading...'}
                            </Typography>

                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="bacl to list">
                                <Link
                                    to="/organization"
                                    state={{ organization: organization, pageIndex: pageIndex }}
                                >
                                    Back to list page
                                </Link>
                            </IconButton>
                        </CardActions>
                    </Card>
                </>
            )
            }
        </>
    );
}