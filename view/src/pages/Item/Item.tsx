import { Button } from '@workspace/ui';
import Header from '@domain/common/Header';
import ExternalLink from '@components/Link';

const ItemPage = () => {
  return (
    <div>
      <Header />
      Item Page<Button>hello</Button>
      <ExternalLink to='https://www.google.com/'>google</ExternalLink>
    </div>
  );
};

export default ItemPage;
