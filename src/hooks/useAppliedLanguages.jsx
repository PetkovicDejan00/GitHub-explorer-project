import { useQuery } from 'react-query'
import axios from 'axios'
import { useContext } from 'react'
import DataContext from '../context/DataContext'

export const useAppliedLanguages = () => {
    const {repoDetails} = useContext(DataContext)
    const {appliedLanguages} = repoDetails
    
    const languagesData = () => {
        return axios.get(appliedLanguages)
    }

    return useQuery('appliedLanguages', languagesData)
}
