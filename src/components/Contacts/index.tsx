import { useState } from "react"
import data from "../../data"
import * as S from "./styles"
import StyledContainer from "../Container"

const Contacts = () => {
    const [dados,] = useState(data)
    return (
        <StyledContainer>
            <S.Ul>
                {dados.map(item => (
                        <S.Li>
                            <p>{item.name}</p>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                            <div>
                                <S.Button className="editar">Editar</S.Button>
                                <S.Button className="remover">Remover</S.Button>
                            </div>
                        </S.Li>
                    ))}
            </ S.Ul>
        </StyledContainer>
    )
}

export default Contacts