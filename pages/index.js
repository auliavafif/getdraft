import Layout from '../components/Layout';
import Search from '../components/Search';
import UserCard from '../components/UserCard';

const userCardProps = {
  userName: 'Mark Robert',
  userLocation: 'Jakarta',
};

export default function Index() {
  return (
    <Layout>
      <Search />
      <div className="container">
        <div className="row">
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
        </div>
        <div className="row">
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
        </div>
        <div className="row">
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
          <div className="col-md-3"><UserCard {...userCardProps} /></div>
        </div>
      </div>
    </Layout>
  );
}
