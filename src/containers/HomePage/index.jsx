import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "../../components";
import { useAxios } from "../../hooks";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    type: "",
  });

  const { run } = useAxios("https://api.jikan.moe/v4/anime", "get", {
    search: 1,
  });

  useEffect(() => {
    let isRunOnce = false;

    if (!isRunOnce) {
      const _searchParams = Object.fromEntries([...searchParams]);
      run();
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
