import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { List, Search } from "../../components";
import { useHomePageService } from "./homepage.api";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const { getAnimes } = useHomePageService();
  const { run: _run, data, loading } = getAnimes;

  const run = (params) => {
    return _run(params);
  };

  const updatePage = (page) =>
    setSearchParams((prevState) => ({ ...prevState, page }));

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

      <div>
        {loading ? "Loading..." : <List data={data} updatePage={updatePage} />}
      </div>
    </div>
  );
};

export default HomePage;
