import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { List, Loading, Search } from "../../components";

import { useHomePageService } from "./homePage.api";

const HomePage = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const { getAnimes } = useHomePageService();
  const { run: _run, data, loading } = getAnimes;

  const run = (params) => {
    return _run(params);
  };

  const updatePage = (page) =>
    setSearchParams(() => {
      const prev = Object.fromEntries([...searchParams]);
      return { ...prev, page };
    });

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
      <Search onSubmit={setSearchParams} />

      <div>
        {loading ? <Loading /> : <List data={data} updatePage={updatePage} />}
      </div>
    </div>
  );
};

export default HomePage;
