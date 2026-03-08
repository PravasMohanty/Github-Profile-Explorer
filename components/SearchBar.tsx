'use client'
import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [gitId, setGitId] = useState("");
    const gitRouter = useRouter()

    const handleSearch = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const trimmedGitId = gitId.trim()

        if (trimmedGitId != "") {
            gitRouter.push(`/user/${trimmedGitId}`)
        }
    }

    return (
        <form onSubmit={handleSearch}>
            <input
                value={gitId}
                onChange={(e) => setGitId(e.target.value)}
                placeholder='Enter the GitHub Id you want to search ...'
            />

            <button
                type='submit'
                disabled={!gitId.trim()}
            >Search</button>

        </form>
    )
}
