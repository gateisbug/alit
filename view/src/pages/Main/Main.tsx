import { Navigate } from 'react-router-dom';

interface Props {
  to: string;
}

const Main = ({ to }: Props) => {
  return <Navigate to={to} />;
};

export default Main;
