import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('http://swapi.dev/api/people');
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  return (
    <div>
      <h2>People</h2>
      {status === 'error' && <p>Error fetching data</p>}
      {status === 'loading' && <p>Loading data</p>}
      {status === 'success' && (
        <div>
          {data.results.map((people) => (
            <Person key={people.name} person={people} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
