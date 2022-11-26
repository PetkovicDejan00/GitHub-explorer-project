import styled from 'styled-components'

export const SortStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 240px;
    border-radius: 10px;
    margin: 0 auto 20px;
    transition: 0.3s ease;
    box-sizing: border-box;
    
    :hover {
        box-shadow: 0 4px 2px -2px darkgray;
    }

    Select {
        padding: 10px;
        background: #2b2d42;
        color: white;
        border: none;
        height: 40px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        cursor: pointer;
        transition: 0.3s ease;

        :hover {
            background: #242637
        }
    }
`
export const SortBtnStyled = styled.button`
    background: #2b2d42;
    font-size: 14px;
    color: white;
    transition: 0.3s ease;
    border-radius: 0px;
    height: 40px;
    padding-inline: 30px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    :hover {
        background: #242637
    }
`