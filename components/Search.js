/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];


const Search = () => (
  <div>
    <form onSubmit={() => alert('aha')}>
      <input className="search-input" type="text" placeholder="🔍 I’m looking for" />
    </form>
    <div className="search-filter">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-centered">
            <div className="row">
              <div className="col-md-6">
                <label>Location</label>
                <Select options={options} />
              </div>
              <div className="col-md-6">
                <label>Age</label>
                <Select options={options} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>
      {
        `
          .search-input {
              width: 100%;
              text-align: center;
              font-size: 24px;
              padding: 15px 0px;
              border: 0px;
          }
          .search-filter {
              padding: 10px 0px;
              border: 1px solid #e6e6e6;
              margin-bottom: 20px
          }
          label{
              color: #a6a9ac
          }
        `
      }
    </style>
  </div>
);

// const { func } = PropTypes;

// Search.propTypes = {
//   userName: string.isRequired,
//   userLocation: string.isRequired,
// };

export default Search;
