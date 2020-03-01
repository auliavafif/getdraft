import Link from 'next/link';
import PropTypes from 'prop-types';

const UserProfile = ({ userName, userLocation }) => (
  <Link href="/user">
    <div className="user-profile">
      <img className="user-profile__photo" src="/img/dummy-photo.jpg" alt="user" />
      <div className="user-profile__name">{userName}</div>
      <div className="user-profile__location">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C3.60363 0 1.65405 1.94958 1.65405 4.34592C1.65405 7.31986 5.54325 11.6858 5.70883 11.8702C5.86437 12.0434 6.13591 12.0431 6.29116 11.8702C6.45675 11.6858 10.3459 7.31986 10.3459 4.34592C10.3459 1.94958 8.39634 0 6 0ZM6 6.53248C4.79433 6.53248 3.81347 5.55159 3.81347 4.34592C3.81347 3.14025 4.79435 2.15939 6 2.15939C7.20565 2.15939 8.18651 3.14027 8.18651 4.34595C8.18651 5.55162 7.20565 6.53248 6 6.53248Z" fill="#BCBEC1" />
        </svg>
        {userLocation}
      </div>
      <div className="user-profile-button">
        <a href="mailto:auliavafif@gmail.com" className="btn btn--primary">Send Email</a>
        <a href="tel:085643366776" className="btn btn--outline">Call Phone</a>
      </div>
      <div className="user-profile-detail">
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Description
          </div>
          {`
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
          The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
          Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.
          `}
        </div>
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Date of Birth
          </div>
          {`
            20 November 2020
          `}
        </div>
        <div className="user-profile-detail__description">
          <div className="user-profile-detail__label">
            Address
          </div>
          {`
          9278 New Road, Kilcoole, Waterhood
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
  </Link>
);

const { string } = PropTypes;

UserProfile.propTypes = {
  userName: string.isRequired,
  userLocation: string.isRequired,
};

export default UserProfile;
