/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import moment from 'moment';

const UserProfile = ({ user }) => (
  <div>
    <div className="user-profile">
      <img className="user-profile__photo" src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
      <div className="user-profile__name">{`${user.name.first} ${user.name.last}`}</div>
      <div className="user-profile__location">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C3.60363 0 1.65405 1.94958 1.65405 4.34592C1.65405 7.31986 5.54325 11.6858 5.70883 11.8702C5.86437 12.0434 6.13591 12.0431 6.29116 11.8702C6.45675 11.6858 10.3459 7.31986 10.3459 4.34592C10.3459 1.94958 8.39634 0 6 0ZM6 6.53248C4.79433 6.53248 3.81347 5.55159 3.81347 4.34592C3.81347 3.14025 4.79435 2.15939 6 2.15939C7.20565 2.15939 8.18651 3.14027 8.18651 4.34595C8.18651 5.55162 7.20565 6.53248 6 6.53248Z" fill="#BCBEC1" />
        </svg>
        {`${user.location.city}, ${user.location.country}`}
      </div>
      <div className="user-profile-button">
        <a href={`mailto:${user.email}`} className="btn btn--primary">Send Email</a>
        <a href={`tel:${user.phone}`} className="btn btn--outline">Call Phone</a>
      </div>
      <div className="user-profile-detail">
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Description
          </div>
          {`
         I'm a sales rep dedicated to helping local Oklahoma City services businesses grow their customer base and decrease customer churn. I have six years of experience in local sales and I've consistently met and exceeded my quota throughout my career. Within the last year, I've topped our leaderboard six out of 10 months. On average, I close business 10% faster than my peers.
          `}
        </div>
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Date of Birth
          </div>
          {moment(user.dob.date).format('DD MMMM YYYY')}
        </div>
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Address
          </div>
          {`
          ${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}, ${user.location.country}, ${user.location.postcode}
          `}
        </div>
      </div>
      <style jsx>
        {`
        .user-profile {
            background: white;
            border: 1px solid #e6e6e6;
            padding: 30px 30px;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
            margin: 50px 0px;
        }

        .user-profile__photo {
            border-radius: 50%;
            overflow: hidden;
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
        .user-profile__name{
            color: #F15E45;
            margin-top: 1rem;
            font-size: 2.5rem;
            font-weight: 700;
        }
        .user-profile__location {
            color: #bcbec1
        }
        .user-profile-button{
          margin: 20px 0px;
        }
        .user-profile-detail{
          text-align: left;
        }
        .user-profile-detail__label{
          font-weight: 700;
          margin-top: 20px
        }
     `}
      </style>
    </div>
  </div>
);

const { object } = PropTypes;

UserProfile.propTypes = {
  user: object.isRequired,
};

export default UserProfile;
