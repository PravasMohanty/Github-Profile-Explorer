
const baseUrl: string = "https://api.github.com"

const getuser = async (userName: string) => {
    const userUrl = baseUrl + `/${userName}`
    const res = await fetch(userUrl, {
        next: { revalidate: 60 }
    })

    if (res.status == 404) {
        throw new Error('User not found')
    }
    if (!res.ok) {
        throw new Error('Failed to fetch user')
    }

    return res.json
}

const getUserRepos = async (useName: string) => {

}

const getRepo = async (username: string, repo: string) => {

}

const getRepoContributors = async (username: string, repo: string) => {

}

const getRepoReadme = async (username: string, repo: string) => {

}