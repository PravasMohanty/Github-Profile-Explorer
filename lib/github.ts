import {
    GitHubContributor,
    GitHubRepo,
    GitHubUser,
} from '@/types/github';

const BASE_URL = "https://api.github.com"

export async function getUser(userName: string): Promise<GitHubUser> {
    const res = await fetch(`${BASE_URL}/users/${userName}`, {
        next: { revalidate: 60 }
    })
    if (res.status === 404) throw new Error('User not found')
    if (!res.ok) throw new Error('Failed to fetch user')
    return res.json()
}

export async function getUserRepos(userName: string): Promise<GitHubRepo[]> {
    const res = await fetch(`${BASE_URL}/users/${userName}/repos`, {
        next: { revalidate: 60 }
    })
    if (!res.ok) throw new Error('Failed to fetch repos')
    return res.json()
}

export async function getRepo(userName: string, repo: string): Promise<GitHubRepo> {
    const res = await fetch(`${BASE_URL}/repos/${userName}/${repo}`, {
        next: { revalidate: 60 }
    })
    if (res.status === 404) throw new Error('Repo not found')
    if (!res.ok) throw new Error('Failed to fetch repo')
    return res.json()
}

export async function getRepoContributors(userName: string, repo: string): Promise<GitHubContributor[]> {
    const res = await fetch(`${BASE_URL}/repos/${userName}/${repo}/contributors`, {
        next: { revalidate: 3600 }
    })
    if (!res.ok) return []
    return res.json()
}

export async function getRepoReadme(userName: string, repo: string): Promise<string | null> {
    const res = await fetch(`${BASE_URL}/repos/${userName}/${repo}/readme`, {
        next: { revalidate: 3600 }
    })
    if (!res.ok) return null
    return res.text()
}