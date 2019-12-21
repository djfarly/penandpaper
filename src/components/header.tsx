/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Link } from 'gatsby';
import Logo from './Logo';

type HeaderProps = {
  siteTitle: string;
};

export default function Header({ siteTitle }: HeaderProps) {
  return (
    <header>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `1.45rem 1.0875rem`,
          textAlign: 'center',
        }}
      >
        <h1 style={{ margin: 0, fontSize: 'inherit' }}>
          <Link
            to="/"
            style={{
              textDecoration: 'none',
              color: 'inherit'
            }}
          >
            <Logo sx={{ maxWidth: 350 }} />
            <div sx={{ fontWeight: 600 }}>
              Spotify Playlists for Roleplaying Sessions
            </div>
          </Link>
        </h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  siteTitle: '',
};
