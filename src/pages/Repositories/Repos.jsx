import LoadingCircle from '../../components/LoadingCircle/LoadingCircle'
import Navigation from '../../components/Navigation/Navigation'
import {Link} from 'react-router-dom'
import {ReposListStyled, Card, Avatar} from './css/ReposListStyled.styled'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

export const Repos = () => {
    const {
        data: reposData,
        isLoading,  
        isError, 
        error, 
        isFetching,
        handleInformations,
    } = useContext(DataContext)


    {isLoading && <LoadingCircle />}
    {isError && <h2>{error.message}</h2>}

    return (
        <main> 
            <Navigation />
                    
            { isFetching ? <LoadingCircle /> : 
                <ReposListStyled className="repos-container">
                    {reposData.data.items.map((item) => { 
                        const {id, name, forks, stargazers_count: stars, full_name} = item
                        const {avatar_url, login: ownerName} = item.owner
                
                        return (
                                    <Link key={id} to={`/repository/${full_name}`}>
                                        <Card key={id} onClick={() => handleInformations(item)}>
                                            <Avatar className="avatar" src={avatar_url}></Avatar>
                                            <h2 to='/RepoPage' className="project-name">{name}</h2>      
                                            <h3 className="owner-name">{ownerName}</h3>
                                            <div className="statistics">
                                                <div className="forks">
                                                    <h2>{forks}</h2>
                                                    <strong>Forks</strong>
                                                </div>
                                                <div className="stars">
                                                    <h2>{stars}</h2>
                                                    <strong>Stars</strong>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                )
                            })}
                </ReposListStyled>
            }
        </main>
    )
}