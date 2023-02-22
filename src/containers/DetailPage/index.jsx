import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Loading } from "../../components";
import paths from "../../routes/paths";

import { useDetailPageService } from "./detailPage.api";

function DetailPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { getAnime } = useDetailPageService({ id });
  const { run: _run, data, loading } = getAnime;

  const { data: animeData } = data || [];

  const run = () => {
    return _run();
  };

  useEffect(() => {
    let isRunOnce = false;

    if (!isRunOnce) {
      run();
    }

    return () => {
      isRunOnce = true;
    };
  }, [id]);

  return (
    <>
      <button onClick={() => navigate(paths.home)}>Back to Home</button>
      {loading ? (
        <Loading />
      ) : (
        <div>This is detail page {animeData?.title}</div>
      )}
    </>
  );
}

export default DetailPage;
