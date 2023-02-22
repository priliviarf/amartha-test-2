import { useAxios } from "../../hooks";

export function useHomePageService() {
  const getAnimes = useAxios({});

  return { getAnimes };
}
