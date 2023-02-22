import Pagination from "../Pagination";
import "./style.scss";
function List({ data = {}, updatePage }) {
  const { data: dataSource = [], pagination } = data;

  if (!dataSource?.length) return null;
  return (
    <div className="list-grid">
      {dataSource.map((anime) => (
        <div className="list-grid-item">{anime.title}</div>
      ))}

      {pagination?.current_page ? (
        <Pagination
          className="pagination-bar"
          currentPage={pagination?.current_page}
          totalCount={pagination?.items?.total}
          pageSize={pagination?.items?.per_page}
          onPageChange={(page) => updatePage(page)}
        />
      ) : null}
    </div>
  );
}

export default List;
