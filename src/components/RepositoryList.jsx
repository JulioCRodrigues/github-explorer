import { RepositoryItem } from '../components/RepositoryItem';

const repository = {
    name: 'bethehero',
    description: 'Seja um heroi',
    link: 'https://github.com/JulioCRodrigues/be-the-hero'
}

export function RepositoryList(){
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