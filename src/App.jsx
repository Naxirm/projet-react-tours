import Tours from "./Tours";
import Loading from "./Loading";
import { useGlobalContext } from "./context";

function App() {
  const { isLoading, tours, getTours } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
