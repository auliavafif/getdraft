/* eslint-disable react/style-prop-object */

const UserCardLoader = () => (
  <div className="user-card-loader">
    <svg
      role="img"
      aria-labelledby="loading-aria"
      preserveAspectRatio="none"
      width="265"
      height="225"
      viewBox="0 0 265 225"
    >
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="220"
        clipPath="url(#clip-path)"
        style={{ fill: 'url("#fill")' }}
      />
      <defs>
        <clipPath id="clip-path">
          <circle cx="132" cy="84" r="50" />
          <rect x="69" y="149" width="127" height="18" />
          <rect x="55" y="175" width="152" height="14" />
        </clipPath>
        <linearGradient id="fill">
          <stop
            offset="0.599964"
            stopColor="#f3f3f3"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="1.59996"
            stopColor="#ecebeb"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
          <stop
            offset="2.59996"
            stopColor="#f3f3f3"
            stopOpacity="1"
          >
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
    </svg>
    <style jsx>
      {
        `
        .user-card-loader {
            border: 1px solid #e6e6e6;
            text-align: center;
            border-radius: 6px;
            cursor: pointer;
            margin: 10px 0px;
        }
        `
      }
    </style>
  </div>
);

export default UserCardLoader;
