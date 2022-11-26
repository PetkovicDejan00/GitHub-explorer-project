import styled from 'styled-components'

export const RepoPageStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    max-width: 1500px;
    margin: 0 auto;

    .repo-details {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;

        h3 {
            margin-top: 0;
        }
    }

    @media (max-width:1160px) {
        flex-direction: column
        // justify-content: center;
    }
`