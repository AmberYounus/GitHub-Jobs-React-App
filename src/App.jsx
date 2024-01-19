import React ,{useState} from 'react';
import './App.css';
import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);


  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    try {
      setParams((prevParams) => {
        return { ...prevParams, [param]: value };
      });
    } catch (error) {
      console.error("Error updating params state:", error);
    }
   
  }
  return (
    <>
      <Container className='mt-4'>
        <h1>Github Jobs</h1>
        <SearchForm params={params} onParamChange={handleParamChange} />
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        {loading && <h1>Loading....</h1>}
        {error && <h1>Error :{error}</h1>}
        {/* <h1>{jobs.length}</h1> */}
        {jobs.map(job => {
          return <Job key={job.id} job={job} />
        })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      </Container>
    </>
  );
}

export default App;
