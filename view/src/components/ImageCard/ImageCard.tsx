import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'ui-imgcard-container',
})``;

const Image = styled.img.attrs({
  className: 'ui-imgcard-image',
})``;

const TextBox = styled.div.attrs({
  className: 'ui-imgcard-textbox',
})``;

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
