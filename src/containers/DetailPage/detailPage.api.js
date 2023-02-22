import { useAxios } from "../../hooks";

export function useDetailPageService({ id } = {}) {
  const getAnime = useAxios({ url: "/" + id });

  return { getAnime };
}
