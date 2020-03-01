import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';

const userCardProps = {
  userName: 'Mark Robert',
  userLocation: 'Jakarta',
};

export default function User() {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-centered"><UserProfile {...userCardProps} /></div>
        </div>
      </div>
    </Layout>
  );
}
