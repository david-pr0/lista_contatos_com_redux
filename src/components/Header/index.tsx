import StyledContainer from '../Container'
import * as S from './styles'

const Header = () => {
    return (
        <S.StyledHeader>
            <StyledContainer>
                <h1>Lista de Contatos</h1>
                <form>
                    <S.Input type='text' placeholder='Buscar' />
                </form>
                <S.Button>+</S.Button>
            </StyledContainer>
        </S.StyledHeader>
    )
}

export default Header