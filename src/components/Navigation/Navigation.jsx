import React from 'react'
import {NavigateArrow} from './css/NavigationArrow.styled'
import {SortStyled, SortBtnStyled} from './css/Sort.styled'
import Select from './Select'

import { useContext } from 'react'
import DataContext from '../../context/DataContext'

const Navigation = () => {
    const { pageNumber, setPageNumber, refetch} = useContext(DataContext)

    const increasePageNum = () => {
        setPageNumber(prevPage => prevPage + 1)
    }
    const decreasePageNum = () => {
        setPageNumber(prevPage => prevPage - 1)
    }

    return (
        <div>
            <SortStyled>
                <Select />
                <SortBtnStyled onClick={refetch}>Sort</SortBtnStyled>
            </SortStyled>
            <NavigateArrow onClick={decreasePageNum} disabled={pageNumber === 1}>⬅ Prev</NavigateArrow>
            <NavigateArrow onClick={increasePageNum}>Next ➡</NavigateArrow>
        </div>
    )
}

export default Navigation