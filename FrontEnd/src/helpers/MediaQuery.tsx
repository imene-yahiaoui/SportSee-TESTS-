/**
 * useMediaQuery Hook
 * @function
 * @category Hooks/MediaQuery
 * @description A hook for handling media queries and updating component state accordingly.
 * @param {string} query - The media query string.
 * @param {boolean} defaultMatches - The default value for the media query matches. Defaults to the initial state.
 * @returns {boolean} - The current state of the media query matches.
 **/
import { useEffect, useState } from "react";

function useMediaQuery(
  query: string,
  defaultMatches = window.matchMedia(query).matches
) {
  const [matches, setMatches] = useState(defaultMatches);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) setMatches(media.matches);

    const listener = () => setMatches(media.matches);

    media.addListener(listener);

    return () => media.removeListener(listener);
  }, [query, matches]);

  return matches;
}

export default useMediaQuery;
