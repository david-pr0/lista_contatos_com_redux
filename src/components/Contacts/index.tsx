import * as S from "./styles"
import StyledContainer from "../Container"
import { useDispatch, useSelector } from "react-redux"
import { removeContact, updateContact } from "../../redux/Contacts/slice"
import { useState } from "react"

const Contacts = () => {
    const { data } = useSelector((state: any) => state.contactSlice)
    const dispatch = useDispatch()

    const [editing, setEditing] = useState<number | null>(null)
    const [tempData, setTempData] = useState({ name: "", email: "", phone: "" })

    const handleRemove = (id: number) => {
        dispatch(removeContact(id))
    }

    const startEditing = (item: any) => {
        setEditing(item.id)
        setTempData({ name: item.name, email: item.email, phone: item.phone })
    }

    const cancelEditing = () => {
        setEditing(null)
    }

    const saveChanges = (id: number) => {
        dispatch(updateContact({ id, ...tempData }))
        setEditing(null)
    }

    const handleChange = (field: string, value: string) => {
        setTempData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <StyledContainer>
            <S.Ul>
                {data.map((item: any) => (
                    <S.Li key={item.id}>
                        {editing === item.id ? (
                            <>
                                <S.Input 
                                    type="text" 
                                    value={tempData.name} 
                                    onChange={(e) => handleChange("name", e.target.value)} 
                                />
                                <S.Input 
                                    type="text" 
                                    value={tempData.email} 
                                    onChange={(e) => handleChange("email", e.target.value)} 
                                />
                                <S.Input 
                                    type="text" 
                                    value={tempData.phone} 
                                    onChange={(e) => handleChange("phone", e.target.value)} 
                                />
                            </>
                        ) : (
                            <>
                                <S.Input disabled type="text" value={item.name} />
                                <S.Input disabled type="text" value={item.email} />
                                <S.Input disabled type="text" value={item.phone} />
                            </>
                        )}
                        <div>
                            {editing === item.id ? (
                                <>
                                    <S.Button className="editar" onClick={() => saveChanges(item.id)}>Salvar</S.Button>
                                    <S.Button className="remover" onClick={cancelEditing}>Cancelar</S.Button>
                                </>
                            ) : (
                                <>
                                    <S.Button className="editar" onClick={() => startEditing(item)}>Editar</S.Button>
                                    <S.Button
                                        className="remover"
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remover
                                    </S.Button>
                                </>
                            )}
                        </div>
                    </S.Li>
                ))}
            </S.Ul>
        </StyledContainer>
    )
}

export default Contacts
