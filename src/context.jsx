import { useState, createContext, useContext, useEffect } from "react";

const url = "https://course-api.com/react-tours-project";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function removeTour(id) {
    const newList = tours.filter((tour) => tour.id !== id);
    setTours(newList);
  }

  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <AppContext.Provider
      value={{
        getTours,
        removeTour,
        showMore,
        setShowMore,
        tours,
        setTours,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
