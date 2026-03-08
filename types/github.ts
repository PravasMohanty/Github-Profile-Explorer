export interface GitHubUser {
    login: string,
    avatar_url: string,
    name: string | null,
    bio: string | null,
    followers: number,
    following: number,
    public_repos: number,
    html_url: string,
    created_at: string
}

export interface GitHubRepo {
    id: number,
    name: string,
    full_name: string,
    description: string | null,
    url: string,
    stargazers_count: number,
    forks_count: number,
    language: string | null,
    html_url: string,
    updated_at: string,
    topics: string[],
    visibility: string
}

export interface GitHubContributor {
    login: string,
    avatar_url: string | null,
    contributions: number,
    html_url: string
}