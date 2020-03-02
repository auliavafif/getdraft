/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Layout from '../../components/Layout';
import UserProfile from '../../components/UserProfile';
import { selectUser } from '../../store/selectors/usersSelectors';
import { updateSelectedUser } from '../../store/actions/usersActions';

const User = ({ updateSelectedUser, selectedUser }) => {
  useEffect(() => {
    const hrefArray = window.location.href.split('/');
    const path = hrefArray[hrefArray.length - 1];
    updateSelectedUser(path);
  }, []);

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-centered">{selectedUser ? <UserProfile user={selectedUser} /> : <div className="text-center user-not-found">Person not found</div>}</div>
        </div>
      </div>
      <style jsx>
        {
          `
            .user-not-found{
              margin-top:40px
            }
          `
        }
      </style>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  selectedUser: selectUser(state),
  userName: state.users.selectedUser,
});

const mapDispatchToProps = {
  updateSelectedUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
