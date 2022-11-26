import styled from 'styled-components'

export const RepoChoiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 0 auto;
    padding: 40px 10px;
    border-radius: 5px;
    transition: 0.25s ease;
`

export const LogoStyled = styled.img`
    border-bottom: 1px solid black;
    max-width: 290px;
    padding: 10px 0;
    margin: 0 auto 20px auto;
    user-drag: none; 
`
export const ButtonsStyled = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;

    a {
        margin: 10px;

        :nth-of-type(1) {
            button {
                color: #0077b6;
                box-shadow: 1px 1px 3px #0077b6;
                transition: 0.3s;

                :hover {
                        border-color: #0077b6;
                        padding-inline: 30px;
                }
            }
            
        }
        :nth-of-type(2) {
            button {
                color: #619b8a;
                box-shadow: 1px 1px 3px #619b8a;
                transition: 0.3s;

                :hover {
                    border-color: #619b8a;
                    padding-inline: 30px;
                }
            }
        }
        :nth-of-type(3) {
            button {
                color: #a4161a;
                box-shadow: 1px 1px 3px #a4161a;
                transition: 0.3s;

                :hover {
                    border-color: #a4161a;
                    padding-inline: 30px;
                }
            }
        }
    }
`
