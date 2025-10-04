import React from "react";

import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import type { GitHubMembers } from "@/api";
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, } from "@mui/material";


interface ListProps {
    members: GitHubMembers
}

export const ListComponent: React.FC<ListProps> = ({ members }) => {
    return (
        <div>
            <List>
                {members.map((item) => {
                    return <ListItem key={item.id}>
                        <ListItemAvatar><Avatar>👤</Avatar></ListItemAvatar>

                        <Link to={routes.Detail(item.id)}>
                            <ListItemText primary={item.login} />
                        </Link>
                    </ListItem>
                })}
            </List>
        </div>
    );
}