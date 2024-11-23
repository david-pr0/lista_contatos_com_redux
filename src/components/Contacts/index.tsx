import * as S from "./styles";
import StyledContainer from "../Container";
import { useDispatch, useSelector } from "react-redux";
import { removeContact } from "../../redux/Contacts/slice";
import { useState } from "react";

const Contacts = () => {
    const { data } = useSelector((state: any) => state.contactSlice);
    const [editing, setEditing] = useState(false)
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(removeContact(id));
    };

    return (
        <StyledContainer>
            <S.Ul>
                {data.map((item: any) => (
                    <S.Li key={item.id}>
                        {
                            editing ? 
                            <>
                                <S.Input type="text" value={item.name} />
                                <S.Input type="text" value={item.email} />
                                <S.Input type="text" value={item.phone} />
                            </>
                            :
                            <>
                                <S.Input disabled type="text" value={item.name} />
                                <S.Input disabled type="text" value={item.email} />
                                <S.Input disabled type="text" value={item.phone} />
                            </>
                        }
                        <div>
                            {
                                editing ? 
                                <>
                                    <S.Button className="editar" onClick={() => setEditing(false)}>Salvar</S.Button>
                                    <S.Button className="remover" onClick={() => setEditing(false)}>Cancelar</S.Button>
                                </> :
                                    <>
                                        <S.Button className="editar" onClick={() => setEditing(true)}>Editar</S.Button>
                                        <S.Button
                                            className="remover"
                                            onClick={() => handleRemove(item.id)}
                                        >
                                            Remover
                                        </S.Button>
                                    </>
                            }
                        </div>
                    </S.Li>
                ))}
            </S.Ul>
        </StyledContainer>
    );
};

export default Contacts;
