import React, { useState } from "react";
import Background from "../../components/Background";

import {
  Container,
  GreatText,
  Header,
  CollectionContainer,
  CollectionTitle,
  BackgroundContainer,
  CollectionItems,
  ButtonModal,
  ModalBox,
  InputBox,
} from "./styles";

import { Input } from "../../styles/styles";

import {
  FaUserCircle,
  AiOutlinePlus,
  FaAddressCard,
  GiConfirmed,
} from "react-icons/all";
import CollectionItem from "../../components/CollectionItem";
import { CollectionData } from "../../components/CollectionItem/CollectionData";
import ModalComponents from "../../components/Modal";

const Home: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [model, setModel] = useState<boolean>(false);

  const handleAddCollection = () => {
    setModalIsOpen(true);
  };
  const OptionUser = () => {
    alert("salve");
  };
  const handleModel = () => setModel(!model);

  return (
    <Container>
      <Background>
        <BackgroundContainer>
          <Header>
            <GreatText>Bem vindo, Lucas</GreatText>
            <FaUserCircle size="40" color="#fff" onClick={OptionUser} />
            <p onClick={handleModel}>clica aqui mane</p>
          </Header>
          <CollectionTitle>Collections</CollectionTitle>
          <CollectionContainer>
            <CollectionItems grid={model}>
              {CollectionData.map((item, index) => {
                return (
                  <CollectionItem
                    isModel={model}
                    isCreated={true}
                    addIcon={false}
                    key={index}
                    title={item.title}
                    exist={true}
                    onClick={handleAddCollection}
                  >
                    <FaAddressCard />
                  </CollectionItem>
                );
              })}
              <CollectionItem
                isCreated={false}
                title=""
                addIcon={true}
                exist={true}
                onClick={handleAddCollection}
              >
                <AiOutlinePlus color="#fff" />
              </CollectionItem>
            </CollectionItems>

            <ModalComponents
              isOpen={modalIsOpen}
              reqClose={() => setModalIsOpen(false)}
            >

              <ModalBox>
                <p>Criar Arquivo</p>
                <InputBox>
                  <Input type="text" placeholder="Digite aqui..." />
                  <ButtonModal color="primary" onClick={OptionUser}>
                    <GiConfirmed color="#fff" size={18} />
                  </ButtonModal>
                </InputBox>
                <ButtonModal onClick={() => setModalIsOpen(false)} color="secondary">Cancelar</ButtonModal>
              </ModalBox>

            </ModalComponents>
          </CollectionContainer>
        </BackgroundContainer>
      </Background>
    </Container>
  );
};

export default Home;
