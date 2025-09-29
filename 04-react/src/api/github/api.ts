import type { GitHubMembers,GitHubMember } from "./vm";

const API_ENDPOINTS = {
    GITHUB_ORG_MEMBERS: (org: string) => `https://api.github.com/orgs/${org}/members`,
    GITHUB_USER: (id: string) => `https://api.github.com/user/${id}`
} as const;

interface gitHubApi{
    getOrganizationMembers: (org: string) => Promise<GitHubMembers>;
    getOrganizationUser: (id: string) => Promise<GitHubMember>;
}

export const gitHub: gitHubApi = {
    getOrganizationMembers: async (org: string): Promise<GitHubMembers> => {

        const response = await fetch(API_ENDPOINTS.GITHUB_ORG_MEMBERS(org));

        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('Acceso denegado (403): Has excedido el límite de rate de la API de GitHub o la organización es privada');
            } else if (response.status === 404) {
                throw new Error('Organización no encontrada (404)');
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        }

        return response.json();
    },
    getOrganizationUser: async (id: string): Promise<GitHubMember> => {

        const response = await fetch(API_ENDPOINTS.GITHUB_USER(id));

        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('Acceso denegado (403): Has excedido el límite de rate de la API de GitHub o la organización es privada');
            } else if (response.status === 404) {
                throw new Error('Usuario no encontrado (404)');
            } else {
                throw new Error(`Error ${response.status}: ${response.statusText}`);
            }
        }

        return response.json();
    }
};