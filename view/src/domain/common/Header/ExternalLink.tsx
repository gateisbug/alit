import React from 'react';
import styled from 'styled-components';
import { Button } from '@workspace/ui';
import { Link } from '@components';

const IconButton = styled(Button)`
  padding: 0.25rem;
  width: 2rem;
  height: 2rem;
`;

interface ExternalLinkProps {
  to: string;
  children: React.ReactElement;
}

const ExternalLink = ({ to, children }: ExternalLinkProps) => {
  return (
    <Link to={to}>
      <IconButton variant='line'>{children}</IconButton>
    </Link>
  );
};

const GroupContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 1rem;
`;

const ExternalLinkGroup = () => {
  return (
    <GroupContainer>
      <ExternalLink to='https://google.com'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 -960 960 960'
        >
          <path
            d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z'
            fill='currentColor'
          />
        </svg>
      </ExternalLink>
      <ExternalLink to='https://google.com'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 -960 960 960'
        >
          <path
            d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z'
            fill='currentColor'
          />
        </svg>
      </ExternalLink>
      <ExternalLink to='https://google.com'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          viewBox='0 -960 960 960'
        >
          <path
            d='M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm40-80h480L570-480 450-320l-90-120-120 160Zm-40 80v-560 560Zm140-360q25 0 42.5-17.5T400-620q0-25-17.5-42.5T340-680q-25 0-42.5 17.5T280-620q0 25 17.5 42.5T340-560Z'
            fill='currentColor'
          />
        </svg>
      </ExternalLink>
    </GroupContainer>
  );
};

export default React.memo(ExternalLinkGroup);
