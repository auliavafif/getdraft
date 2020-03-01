import Link from 'next/link';
import PropTypes from 'prop-types';

const UserCard = ({ userName, userLocation }) => (
  <Link href="/u/mark+robert">
    <div className="user-card">
      <img className="user-card__photo" src="/img/dummy-photo.jpg" alt="user" />
      <div className="user-card__name">{userName}</div>
      <div className="user-card__location">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 0C3.60363 0 1.65405 1.94958 1.65405 4.34592C1.65405 7.31986 5.54325 11.6858 5.70883 11.8702C5.86437 12.0434 6.13591 12.0431 6.29116 11.8702C6.45675 11.6858 10.3459 7.31986 10.3459 4.34592C10.3459 1.94958 8.39634 0 6 0ZM6 6.53248C4.79433 6.53248 3.81347 5.55159 3.81347 4.34592C3.81347 3.14025 4.79435 2.15939 6 2.15939C7.20565 2.15939 8.18651 3.14027 8.18651 4.34595C8.18651 5.55162 7.20565 6.53248 6 6.53248Z" fill="#BCBEC1" />
        </svg>
        {userLocation}
      </div>
      <style jsx>
        {`
        .user-card {
            background: white;
            border: 1px solid #e6e6e6;
            padding: 30px 15px;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
            margin: 10px 0px;
        }

        .user-card:hover {
            transform: translateY(-1px);
            transition-delay: 0s;
            background: #fafafa;
        }

        .user-card__photo {
            border-radius: 50%;
            overflow: hidden;
            width: 100px;
            height: 100px;
            object-fit: cover;
        }
        .user-card__name{
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 700;
        }
        .user-card__location {
            color: #bcbec1
        }
     `}
      </style>
    </div>
  </Link>
);

const { string } = PropTypes;

UserCard.propTypes = {
  userName: string.isRequired,
  userLocation: string.isRequired,
};

export default UserCard;
