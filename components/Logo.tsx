import Link from 'next/link';

const Logo: React.FCC = () => {
  return (
    <div>
      <Link href={'/'} passHref>
        <a className="font-bold">Emiliano Mastragostino</a>
      </Link>
    </div>
  );
};

export default Logo;
