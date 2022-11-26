import React from 'react'
import {Avatar} from '../Repositories/css/ReposListStyled.styled'
import {ContributorsList} from '../../components/Contributors/ContributorsList'
import {AppliedLanguages} from '../../components/AppliedLanguages/AppliedLanguages'
import {RepoPageStyled} from './css/RepoPage.styled'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

export const RepoPage = () => {
    const {repoDetails} = useContext(DataContext) 
    const {
        name,
        stars,
        forks,
        ownerName,
        ownerAvatar,
        openIssues,
        contributorsList,
        appliedLanguages,
        url,
    } = repoDetails
    
    return (
        <RepoPageStyled>
            <div className="repo-details">
                <h2>
                    <a href={url} target="_blank">{name}</a>
                </h2>
                <Avatar className="avatar" src={ownerAvatar}></Avatar>
                <h2>{ownerName}'s repository</h2>
                <h3>⭐ {stars} | 🍴 {forks}</h3>
                <h3>{openIssues} open issues</h3>
                <AppliedLanguages appliedLanguages={appliedLanguages}/>
            </div>
            <ContributorsList contributorsList={contributorsList}/>
        </RepoPageStyled>
    )
}
