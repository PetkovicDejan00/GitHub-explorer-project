import { createContext, useState } from 'react';
import axios from 'axios'
import {useQuery, useMutation} from 'react-query'
const DataContext = createContext({})

let dataType = 'react';
export const DataProvider = ({ children }) => {
    const [pageNumber, setPageNumber] = useState(1)
    const [repoDetails, setRepoDetails] = useState({})
    const [sortRepos, setSortRepos] = useState('')
    

    const {isLoading, data, isError, error, isFetching, refetch} = useQuery(['repos', pageNumber], () => fetchedData(pageNumber),
    {
        keepPreviousData: true,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    })

    const fetchedData = () => {
        return axios.get(`https://api.github.com/search/repositories?q=${dataType}&per_page=4&page=${pageNumber}${sortRepos}`)
    }

    const {mutate} = useMutation((newDataType) => (dataType = newDataType), {
        onSuccess: () => {
            refetch()
        }
    })

    const handleReactRepos = () => {
        mutate('react')
        setPageNumber(1)
    }
    const handleVueRepos = () => {
        mutate('vue')
        setPageNumber(1)
    }
    const handleAngularRepos = () => {
        mutate('angular')
        setPageNumber(1)
    }
    const handleInformations = (item) => {
        setRepoDetails({
            name: item.full_name,
            stars: item.stargazers_count,
            forks: item.forks,
            ownerName: item.owner.login,
            ownerAvatar: item.owner.avatar_url,
            openIssues: item.open_issues,
            contributorsList: item.contributors_url,
            appliedLanguages: item.languages_url,
            url: item.svn_url,
        })
    }

    return (
        <DataContext.Provider value={{
            repoDetails, handleReactRepos, handleVueRepos, handleAngularRepos, dataType, 
            pageNumber, setPageNumber, setRepoDetails, sortRepos, setSortRepos, fetchedData, 
            isLoading, data, isError, error, isFetching, refetch, handleInformations
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;