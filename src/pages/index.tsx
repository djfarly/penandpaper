import React from 'react';
import { Link } from 'gatsby';

import Layout from '~/components/layout';
import playlists from '~/data/playlists';
import SEO from '~/components/seo';
import PlaylistList from '~/components/PlaylistList';
import Playlist from '~/components/Playlist';

const IndexPage = () => (
  <Layout>
    <SEO />
    <div style={{ textAlign: 'center', maxWidth: '45em', margin: '60px auto' }}>
      Background game music for pen and paper, tabletop or writing sessions.
      <br />
      Hand picked to not contain anything distracting.
    </div>
    <PlaylistList>
      {playlists.map(playlist => (
        <Playlist key={playlist.id} {...playlist} />
      ))}
    </PlaylistList>
  </Layout>
);

export default IndexPage;
