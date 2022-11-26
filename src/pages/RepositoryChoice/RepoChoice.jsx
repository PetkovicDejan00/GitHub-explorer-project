import React from 'react'
import {RepoChoiceContainer, LogoStyled, ButtonsStyled} from './css/RepoChoice.styled'
import {useContext} from 'react'
import DataContext from '../../context/DataContext'
import {NavLink} from 'react-router-dom'

export const RepoChoice = () => {
    const {
        handleReactRepos, handleVueRepos, handleAngularRepos} = useContext(DataContext)

    return (
        <RepoChoiceContainer>
            <LogoStyled src="./GitHub-Logo.png"></LogoStyled>
            <ButtonsStyled>
                <NavLink to="/repositories">
                    <button onClick={handleReactRepos}>React</button>
                </NavLink>
                                        
                <NavLink to="/repositories">
                    <button onClick={handleVueRepos}>Vue</button>
                </NavLink>
                                            
                <NavLink to="/repositories">
                    <button onClick={handleAngularRepos}>Angular</button>
                </NavLink>
            </ButtonsStyled>
        </RepoChoiceContainer>
    )
}

