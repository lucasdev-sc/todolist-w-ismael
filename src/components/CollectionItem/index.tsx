import { Container, Icon, TextBox, Title, CreatedUserText } from "./styles";

interface Props {
  title?: string;
  addIcon: boolean;
  isCreated: boolean;
  exist?: boolean;
  onClick: any;
  isModel?: boolean
}

const CollectionItem: React.FC<Props> = (props) => {
  return (
    <Container model={props.isModel} onClick={props.onClick}>
      {props.exist && <Icon add={props.addIcon}>{props.children}</Icon>}
      {props.isCreated && (
        <TextBox model={props.isModel}>
          <Title>{props.title}</Title>
          <CreatedUserText>Criado por Lucas</CreatedUserText>
        </TextBox>
      )}
    </Container>
  );
};

export default CollectionItem;
