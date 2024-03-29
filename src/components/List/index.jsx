import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

import "./style.scss";

/**
 *
 * @typedef ListProps
 * @property {Object} data
 * @property {() => void} updatePage
 *
 * @param {ListProps} props
 * @returns
 */
function List({ data = {}, updatePage }) {
  const { data: dataSource = [], pagination } = data;

  if (!dataSource?.length)
    return (
      <div>
        <h3>We couldn't find anything</h3>
        <p>Please try another search keywords</p>
      </div>
    );
  return (
    <>
      <div className="list-grid">
        {dataSource.map((anime) => (
          <Link key={anime.mal_id} to={`detail/${anime.mal_id}`}>
            <div className="list-grid-item">
              <img
                className="anime-img"
                src={anime.images.jpg.large_image_url}
              />

              <div className="overlay">
                <p className="title">{anime.title}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {pagination?.current_page ? (
        <Pagination
          className="pagination-bar"
          currentPage={pagination?.current_page}
          totalCount={pagination?.items?.total}
          pageSize={pagination?.items?.per_page}
          onPageChange={(page) => updatePage(page)}
        />
      ) : null}
    </>
  );
}

export default List;
