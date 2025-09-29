import React from "react";

import { Link } from "react-router-dom";
import { routes } from "@/router/routes";
import type { GitHubMembers } from "@/api";

interface ListProps {
    organization: string,
    members: GitHubMembers
    pageIndex: number,
}

export const ListComponent: React.FC<ListProps> = ({ members, organization, pageIndex }) => {
    return (
        <div>
            <ul>
                {members.map((item) => {
                    return <li key={item.id}>
                        <Link
                            to={routes.Detail(item.id)}
                            state={{ organization: organization, pageIndex: pageIndex }}>
                            {item.login}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    );
}