import * as S from "./styles"

interface AddContactProps {
    isVisible: boolean;
    setIsVisible: (value: boolean) => void;
}

const AddContact: React.FC<AddContactProps> = ({ isVisible, setIsVisible }) => {
    if (!isVisible) return null;

    return (
        <S.Container>
            <S.Form>
                <S.Input type="text" placeholder="Nome" />
                <S.Input type="text" placeholder="Email" />
                <S.Input type="text" placeholder="Telefone" />
                <S.Flex>
                    <S.Button className="save">Adicionar</S.Button>
                    <S.Button className="cancel" onClick={() => setIsVisible(false)}>Cancelar</S.Button>
                </S.Flex>
            </S.Form>
        </S.Container>
    );
};

export default AddContact;
