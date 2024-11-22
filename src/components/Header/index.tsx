import { useState } from 'react'
import StyledContainer from '../Container'
import * as S from './styles'
import AddContact from '../AddContact'

const Header = () => {
    const [isVisible, setIsVisible] = useState(false)
    const handleChangeVisibility = () => {
        setIsVisible(true)
    }
    return (
        <>
            <S.StyledHeader>
                <StyledContainer>
                    <h1>Lista de Contatos</h1>
                    <form>
                        <S.Input type='text' placeholder='Buscar' />
                    </form>
                    <S.Button onClick={handleChangeVisibility}>+</S.Button>
                </StyledContainer>
            </S.StyledHeader>
            <AddContact isVisible={isVisible} setIsVisible={setIsVisible} />
        </>
    )
}

export default Header