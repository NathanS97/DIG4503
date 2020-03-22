import IdSearch from '../components/IdSearch';
import NameSearch from '../components/NameSearch';

const Home = () => {
  return (
    <div>
      <IdSearch />
      <NameSearch />
      <div id="reportingArea"></div>
    </div>
  );
}

export default Home;