import { Navigate } from 'react-router-dom';

interface Props {
  to: string;
}

const NotAvailable = ({ to }: Props) => {
  return <Navigate to={to} />;
};

export default NotAvailable;
