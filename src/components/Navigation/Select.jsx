import React from 'react'
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

const options = [
    {
        label: "Default",
        value: "default",
    },
    {
        label: "Sort repos by stars",
        value: "sortByStars",
    },
    {
        label: "Sort repos by forks",
        value: "sortByForks",
    }
]

const Select = () => {
    const { setSortRepos } = useContext(DataContext) 

    function handleChange(e) {
        if (e.target.value === 'default') {
            setSortRepos('')
        } else if (e.target.value === 'sortByStars') {
            setSortRepos('&sort=stars&order=desc')
        } else if (e.target.value === 'sortByForks') {
            setSortRepos('&sort=forks&order=desc')
        }
    }
    return (
        <form>
            <select onChange={(e) => handleChange(e)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </form>
    )
}

export default Select