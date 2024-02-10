import React from 'react';

const SearchSection = () => (
  <section className="tide-safety-net-section py-5">
    <div className="container text-center">
      <h2 className="font-weight-bold">TideSafetyNet</h2>
      <p className="mb-4">Both Mombasa and Malindi are principal stations on the Global Sea Level Observing System (GLOSS), a global network of tide gauges for monitoring climate change induced sea level rise. They are also dedicated components of the Indian Ocean Tsunami Warning System (IOTWS). Hourly data generated by the two stations (and others like them in the Indian Ocean) can be used to either confirm or cancel a tsunami warning throughout the region.</p>
      <div className="search-records">
        <h3>Search Records</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Hours</th>
              <th>City</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <td>12</td>
            <td>13</td>
            <td>Mombasa</td>
            <td>
              <button className='btn btn-primary'>Search</button>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default SearchSection;
