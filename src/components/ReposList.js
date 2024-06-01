import React, { useState, useEffect } from "react";
import axios from "axios";



const BASE_URL = 'https://api.github.com';

function ReposList() {
    const [repos, setRepos ] = useState([]);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await
                axios.get(`${BASE_URL}/users/GreatGrace24/repos`);
                setRepos(response.data);
            } catch (error) {
                console.error('Error fetching repositories:', error);
            }
        }
        fetchRepos();
    }, []);
    
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">
                My Repositories
            </h2>
            <ul className="space-y-4">
                {repos.map(repo =>(
                    <li key={repo.id} className="border p-4 rounded shadow-md">
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {repo.name}
                        </a>
                        <p className="text-gray-600">
                            {repo.description}
                        </p>
                        <span className="text-sm text-gray-500">
                            Language: {repo.language || 'Not Specified'}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default ReposList;