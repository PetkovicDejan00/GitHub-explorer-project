import { useQuery } from 'react-query'
import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

export const useContributorsList = () => {
    const {repoDetails} = useContext(DataContext)
    const {contributorsList} = repoDetails
    const contributorsData = () => {
        return axios.get(contributorsList)
    }

    return useQuery('contributorsList', contributorsData)
}
