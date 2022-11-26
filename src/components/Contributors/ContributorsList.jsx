import {ContributorsContainer} from './css/Contributors.styled'
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import {useContributorsList} from '../../hooks/useContributorsList'

export const ContributorsList = () => {
    const {data: dataContributorsList, isLoading, isError, error} = useContributorsList()

    if (isLoading) {
        return <LoadingCircle />
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            <h2>Contributors List ⬇</h2>
            <ContributorsContainer>
            {dataContributorsList.data.map((contributor, index) => {
                    if (index >= 10) {
                        return
                    }
                    return (
                                <a className="card" href={contributor.html_url} target="_blank" key={index}>
                                    <img src={contributor.avatar_url} />
                                    <h3>{contributor.login}</h3>
                                    <p>Number of contributions: {contributor.contributions}</p>
                                </a>  
                    )
                })}
            </ContributorsContainer>
        </div>
    )
}