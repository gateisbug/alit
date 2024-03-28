import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'ui-imgcard-container',
})`
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.img.attrs({
  className: 'ui-imgcard-image',
})`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const TextBox = styled.div.attrs({
  className: 'ui-imgcard-textbox',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

interface Props {
  src?: string;
  children?: React.ReactNode;
}

const ImageCard = ({ src, children }: Props) => {
  return (
    <Container>
      <Image src={src} alt='image-background' />
      <TextBox>{children}</TextBox>
    </Container>
  );
};

interface ImageCardComponent
  extends React.MemoExoticComponent<typeof ImageCard> {
  Container: typeof Container;
  Image: typeof Image;
  TextBox: typeof TextBox;
}

const MemoizedImageCard = React.memo(ImageCard) as ImageCardComponent;
MemoizedImageCard.Container = Container;
MemoizedImageCard.Image = Image;
MemoizedImageCard.TextBox = TextBox;

export default MemoizedImageCard;
