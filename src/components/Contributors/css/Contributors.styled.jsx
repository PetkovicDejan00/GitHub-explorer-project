import styled from 'styled-components'

export const ContributorsContainer = styled.div`
    display: flex;  
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 700px;

    .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2em;
        width: 35%;
        transition: 0.25s;
        border-radius: 10px;
        margin: 10px;
        color: white;
        transition: 0.3s;
        background: rgba(255,255,255,0.2);
        
        :hover {
            box-shadow: rgba(50, 50, 93, 0.5) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.9) 0px 18px 36px -18px inset;
        }

        @media (max-width: 642px) {
            width: 100%;
        }

        h3 {
            color: white;
            margin-bottom: 0;
            letter-spacing: 1.2px;
        }

        p {
            margin-bottom: 0;
        }
    }

    img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
    }

    @media (max-width:1160px) {
        width: 100%;
        
    }
`