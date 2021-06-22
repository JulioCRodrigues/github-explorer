
import { useState, useEffect } from 'react';
import { RepositoryItem } from '../components/RepositoryItem';

import '../styles/repositories.scss';

// 

const repository = {
    name: 'bethehero',
    description: 'Seja um heroi',
    link: 'https://github.com/JulioCRodrigues/be-the-hero'
}

export function RepositoryList(){

    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/JulioCRodrigues/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, [])



    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem 
                    repository={repository} />
                    <RepositoryItem 
                    repository={repository} />
                    <RepositoryItem 
                    repository={repository} />
            </ul>

        </section>
    );
}