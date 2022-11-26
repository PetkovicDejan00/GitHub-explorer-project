import styled from 'styled-components'

export const ReposListStyled = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
`
export const Card = styled.div`
    background-color: white;
    border-radius: 5px;
    margin: 10px;
    padding: 20px;
    cursor: pointer;
    width: 300px;
    filter: brightness(85%);
    transition: 0.5s ease;

    :hover {
        // border-top-right-radius: 50%;
        filter: brightness(100%);
    }
        
    .project-name {
        color: #003566;
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 25px;
        display: block;
        height: 45px;
    }
    .owner-name {
        color: #8d99ae;
        margin-top: 8px;
    }
    .statistics {
        color: white;
        background: #0f0c29;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #24243e, #302b63, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        padding: 10px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        .forks {
            padding-bottom: 10px;
        }

        h2 {
            margin-bottom: 5px;
        }
    }

`
export const Avatar = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    padding-top: 10px;
`