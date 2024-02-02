import React from 'react';
import styled from 'styled-components';
import { Button } from '@workspace/ui';
import { Link } from '@components';
import { ArcaLiveIcon, GithubIcon, ImageIcon } from '@icon';

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
  gap: 1.5rem;
`;

const ExternalLinkGroup = () => {
  const links = React.useRef([
    { to: 'https://arca.live/b/azurlane/45593816', render: <ArcaLiveIcon /> },
    { to: 'https://github.com/gateisbug/alit', render: <GithubIcon /> },
    {
      to: 'https://azurlane.koumakan.jp/wiki/Azur_Lane_Wiki',
      render: <ImageIcon />,
    },
  ]);

  return (
    <GroupContainer>
      {links.current.map((v) => (
        <ExternalLink key={v.to} to={v.to}>
          {v.render}
        </ExternalLink>
      ))}
    </GroupContainer>
  );
};

export default React.memo(ExternalLinkGroup);
