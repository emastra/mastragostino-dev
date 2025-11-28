// This component is a React hook that allows you to track the state of a CSS media query.
// it's been created by AI but I do not use it yet.

/* Potential useage example:

import { useMediaQuery } from '~/lib/useMediaQuery';

const Logo: React.FCC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div>
      <Link href={'/'} passHref>
        <a className='text-foreground'>
          {isMobile ? <SymbolSvg /> : <LogoSvg />}
        </a>
      </Link>
    </div>
  );
};

*/


import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);

    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};
