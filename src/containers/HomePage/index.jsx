import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search } from "../../components";
import { useHomePageService } from "./homepage.api";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({
    search: "",
    type: "",
  });

  const { getAnimes } = useHomePageService();

  const run = (params) => {
    const { run: _run } = getAnimes;
    return _run(params);
  };

  useEffect(() => {
    let isRunOnce = false;

    if (!isRunOnce) {
      const _searchParams = Object.fromEntries([...searchParams]);
      run(_searchParams);
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
