/* eslint-disable no-alert */
import PropTypes from 'prop-types';
import Dropdown from 'react-dropdown';

const ages = [
  { value: 'ALL', label: 'All Ages' },
  { value: 'UNDER_30', label: '< 30' },
  { value: '30 - 50', label: '30 - 50' },
  { value: '50', label: '50 >' },
];

const locations = [
  { value: 'ALL', label: 'All Locations' },
  { value: 'Australia', label: 'Australia' },
  { value: 'United States', label: 'USA' },
  { value: 'France', label: 'France' },
  { value: 'Brazil', label: 'Brazil' },
  { value: 'Canada', label: 'Canada' },
];

const Search = (
  {
    updateSearchKeyword,
    updateSearchLocation,
    updateSearchAge,
    keyword,
    location,
    age,
  },
) => (
  <div>
    <form onSubmit={() => alert('aha')}>
      <input className="search-input" type="text" value={keyword} onChange={(e) => updateSearchKeyword(e.target.value)} placeholder="🔍 I’m looking for" />
    </form>
    <div className="search-filter">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-centered">
            <div className="row">
              <div className="col-md-6">
                <label>Age</label>
                <Dropdown options={ages} value={age} onChange={(e) => updateSearchAge(e.value)} placeholder="Select an option" />
              </div>
              <div className="col-md-6">
                <label>Location</label>
                <Dropdown options={locations} value={location} onChange={(e) => updateSearchLocation(e.value)} placeholder="Select an option" />
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
//   changeAges: string.isRequired,
//   userLocation: string.isRequired,
// };

export default Search;
