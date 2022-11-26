import React from 'react'
import LoadingCircle from '../LoadingCircle/LoadingCircle'
import {Language} from './css/Language.styled'
import {useAppliedLanguages} from '../../hooks/useAppliedLanguages'

export const AppliedLanguages = () => {

    const { data: dataAppliedLanguages, isLoading, isError, error } = useAppliedLanguages()

    if (isLoading) {
        return <LoadingCircle />
    }
    if (isError) {
        return <h2>{error.message}</h2>
    }
    const ObjectData = Object.entries(dataAppliedLanguages?.data)

    return (
        <>
            <h2>Applied Languages</h2>
            {ObjectData.map((key, value) => {
                return (
                    <Language key={value}>➲<strong>{key[0]}:</strong>{key[1]}</Language>
                )
            })}
        </>
    )
}