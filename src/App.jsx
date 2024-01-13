import React from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import Job from './Job';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error ,hasNextPage} = useFetchJobs(params, page);


  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }
  return (
    <>
      <Container>
        <h1>Github Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
     <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error .Try Refreshing....</h1>}
        {/* <h1>{jobs.length}</h1> */}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}

      </Container>
    </>
  );
}

export default App;
