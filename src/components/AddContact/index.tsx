import { useState } from "react";
import * as S from "./styles"
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/Contacts/slice";

interface AddContactProps {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

const AddContact: React.FC<AddContactProps> = ({ isVisible, setIsVisible }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const { data } = useSelector((state: any) => state.contactSlice)

    const changeName = (e:any) => {
        setName(e.target.value)
    }

    const changeEmail = (e:any) => {
        setEmail(e.target.value)
    }

    const changePhone = (e:any) => {
        setPhone(e.target.value)
    }

    const dispatch = useDispatch()

    const prevRecharge = (e: any) => {
        e.prevent()
    }

    const sendingContact = () => {
        const newId = data.length + 1
        const contact = {
            id: newId,
            name: name,
            email: email,
            phone: phone
        }
        dispatch(addContact(contact))
        setIsVisible(false)
    }

    if (!isVisible) return null;

    return (
        <S.Container>
            <S.Form onSubmit={prevRecharge}>
                <S.Input type="text" value={name} placeholder="Nome" onChange={changeName} required />
                <S.Input type="email" value={email} placeholder="Email" onChange={changeEmail} required />
                <S.Input type="phone" value={phone} placeholder="Telefone" onChange={changePhone} required />
                <S.Flex>
                    <S.Button type="submit" className="save" onClick={sendingContact}>Adicionar</S.Button>
                    <S.Button className="cancel" onClick={() => setIsVisible(false)}>Cancelar</S.Button>
                </S.Flex>
            </S.Form>
        </S.Container>
    );
};

export default AddContact;
