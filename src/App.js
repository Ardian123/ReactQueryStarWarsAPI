import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
  const queryClient = new QueryClient();
  const [page, setPage] = useState('planets');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Start Wars info</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === 'planets' ? <Planets /> : <People />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
