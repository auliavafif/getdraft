/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { connect } from 'react-redux';
import { InfiniteScroll } from 'react-simple-infinite-scroll';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import Search from '../components/Search';
import UserCard from '../components/UserCard';
import {
  getUsersRequest, getUsersSuccess, getUsersFailure,
  updateSearchKeyword, updateSearchLocation, updateSearchAge,
} from '../store/actions/usersActions';
import UserCardLoader from '../components/UserCardLoader';
import { selectFilteredUsersList } from '../store/selectors/usersSelectors';

const UserCardLoaders = () => {
  const loaders = [];
  for (let i = 0; i < 8;) {
    loaders.push(<div className="col-md-3" key={`key-${i}`}><UserCardLoader /></div>);
    i += 1;
  }
  return loaders;
};

const Index = ({
  page, usersList, getUsersRequest, loading,
  updateSearchKeyword,
  updateSearchLocation,
  updateSearchAge,
  keyword,
  location,
  age,
}) => {
  useEffect(() => {
    getUsersRequest(page + 1);
  }, []);

  const renderUserCards = () => usersList.map((user) => {
    const picture = user.picture.medium;
    const name = `${user.name.first} ${user.name.last}`;
    const location = `${user.location.city}, ${user.location.country}`;
    return <div className="col-md-3"><UserCard key={user.login.uuid} name={name} location={location} picture={picture} /></div>;
  });

  const searchProps = {
    updateSearchKeyword,
    updateSearchLocation,
    updateSearchAge,
    keyword,
    location,
    age,
  };

  return (
    <Layout>
      <Search {...searchProps} />
      <div className="container">
        <div className="row">
          {usersList.length === 0
            ? <UserCardLoaders />
            : (
              <InfiniteScroll
                throttle={500}
                threshold={200}
                isLoading={loading.getUsers}
                hasMore={page !== 25}
                onLoadMore={() => getUsersRequest(page + 1)}
              >
                {renderUserCards()}
              </InfiniteScroll>
            )}
          {loading.getUsers && (
          <UserCardLoaders />
          )}
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  page: state.users.page,
  usersList: selectFilteredUsersList(state),
  loading: state.loading,
  keyword: state.users.keyword,
  location: state.users.location,
  age: state.users.age,
});

const mapDispatchToProps = {
  getUsersRequest,
  getUsersSuccess,
  getUsersFailure,
  updateSearchKeyword,
  updateSearchLocation,
  updateSearchAge,
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
