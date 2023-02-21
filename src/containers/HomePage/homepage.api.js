import { useAxios } from "../../hooks";

export function useHomePageService() {
  const getAnimes = useAxios({ url: "https://api.jikan.moe/v4/anime" });

  return { getAnimes };
}
