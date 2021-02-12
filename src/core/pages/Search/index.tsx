import React, { useEffect, useState } from 'react';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import { User } from 'core/types/User';
import Button from 'core/assets/styles/components/Button';
import ImageLoader from 'core/assets/styles/components/Loaders/imgLoader';
import InfoLoader from 'core/assets/styles/components/Loaders/infoLoader';
// import { Container } from './styles';

const Search = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setIsLoading(true);
        fetch(`https://api.github.com/users/${search}`)
            .then(response => response.json())
            .then(userResponse => setUserData(userResponse))
            .finally(() => {
                setIsLoading(false);
            })

        /*
        makeRequest({url: `/users/${user}`})
        .then(response => setUser(response.data))
        */
    }

    console.log(userData);

    const handleChange = (event: any) => {
        setSearch(event.target.value);
    }


    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="search-container">

                    <div className="search-content">
                        Encontre um perfil Github
                </div>
                    <div className="search-input" >
                        <input
                            value={search}
                            type="text"
                            placeholder="Usuário GitHub"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="search-btn">
                        <Button text="Encontrar" />
                    </div>
                </div>
            </form>

            {userData && (
                <div className="row github-card-container">

                    {isLoading ? <ImageLoader /> : (
                        <div className="col-2 github-foto-container">

                            <img src={userData?.avatar_url} alt="Github Foto" />
                            <a href={userData?.html_url} target="_blank" rel="noreferrer">
                                <Button text="Ver Perfil" />
                            </a>

                        </div>
                    )}

                    {isLoading ? <InfoLoader /> : (
                        <div className="col-9 github-info-container">
                            <div className="flex-info">

                                <div className="items-info">
                                    Repositórios públicos: {userData?.public_repos}
                                </div>
                                <div className="items-info">Seguidores: {userData?.followers}</div>
                                <div className="items-info">Seguindo: {userData?.following} </div>
                            </div>
                            <div className="flex-info-details">
                                <h6>Informações</h6>
                                <div className="info-member">

                                    <div className="info-member-details">
                                        <span>Empresa:  {userData?.company}</span>
                                    </div>


                                    <div className="info-member-details">
                                        <span>Website/Blog: {userData?.blog} </span>
                                    </div>


                                    <div className="info-member-details">
                                        <span>Localidade: {userData?.location} </span>
                                    </div>

                                    <div className="info-member-details">
                                        <span>Membro desde: {userData?.created_at}</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                    )}
                </div>
            )}
        </>
    );
};

export default Search;