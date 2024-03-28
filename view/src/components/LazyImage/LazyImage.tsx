import React from 'react';
import styled from 'styled-components';

const Root = styled.img.attrs({
  className: 'ui-lazyimg-root',
})`
  width: 100%; /* 이미지가 컨테이너의 전체 너비를 차지하도록 설정 */
  height: auto; /* 이미지 비율을 유지 */
  display: block; /* 이미지를 블록 요소로 만듬 (새 줄에서 시작) */
  margin: 0 auto; /* 이미지를 가운데 정렬 */
`;

interface LazyImgProps {
  placeholder?: string;
  src?: string;
}

const LazyImage = ({ placeholder, src }: LazyImgProps) => {
  const [link, setLink] = React.useState(placeholder);
  const imgRef = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLink(src);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <Root
      ref={imgRef}
      src={link}
      loading='lazy'
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/assets/noImage.svg';
      }}
      alt='wait'
    />
  );
};

export default React.memo(LazyImage);
