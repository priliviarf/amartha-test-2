import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Loading } from "../../components";
import paths from "../../routes/paths";

import { useDetailPageService } from "./detailPage.api";
import "./style.scss";

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
    <div className="detail-page">
      <button type="button" onClick={() => navigate(paths.home)}>
        Back to Home
      </button>
      {loading ? (
        <Loading />
      ) : !animeData ? (
        "No Anime data :("
      ) : (
        <div>
          <h2>{animeData.title}</h2>
          <div className="alt-title">
            <p>{animeData.title_english}</p>
            <p>{animeData.title_japanese}</p>
          </div>

          <div className="anime-detail-page">
            <div className="img-wrapper">
              <img src={animeData.images.jpg.large_image_url} />
            </div>
            <div className="anime-desc">
              <div className="summary">
                <div className="likes">
                  <strong>{animeData.favorites}</strong> Like It
                </div>
                <div className="summary-detail">
                  <span className="year">{animeData.year}</span>
                  <span className="episodes">
                    {animeData.episodes} Episodes
                  </span>
                </div>
              </div>
              <div className="detail">
                <p>
                  <i>{animeData.status}</i>
                </p>

                <div>
                  <strong>Synopsis</strong>
                </div>
                <p>{animeData.synopsis}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailPage;
