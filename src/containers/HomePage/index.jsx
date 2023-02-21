import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "../../components";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    type: "",
  });

  useEffect(() => {
    let isRunOnce = false;

    if (!isRunOnce) {
      const _searchParams = Object.fromEntries([...searchParams]);
      console.log(_searchParams);
    }

    return () => {
      isRunOnce = true;
    };
  }, [searchParams]);

  return (
    <div className="home">
      <h2>GetAnime</h2>
      <Search onSubmit={setSearchParams} />
    </div>
  );
};

export default HomePage;
