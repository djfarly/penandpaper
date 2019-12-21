import React from 'react';
import { sx } from '~/utils/sx';
import GatsbyImage, { FluidObject } from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const time = '400ms';
const ease = 'cubic-bezier(0.42, 0.26, 0.09, 1.21)';

const PlaylistImage = sx(GatsbyImage)({
  boxShadow:
    '4px 4px 32px rgba(0, 0, 0, 0.15), 2px 2px 16px rgba(0, 0, 0, 0.1)',
  transform: 'scale(1)',
  filter: 'brightness(1) saturate(1) contrast(1)',
  transition: `box-shadow ${time} ${ease}, transform ${time} ${ease}, filter ${time} ${ease}`,
  'a:hover > &': {
    boxShadow:
      '6px 6px 48px rgba(0, 0, 0, 0.1), 4px 4px 28px rgba(0, 0, 0, 0.1)',
    transform: 'scale(1.007)',
    filter: 'brightness(1.04) saturate(1.02) contrast(0.99)',
  },
});

function getImage(image: string, data: any) {
  return data?.allImageSharp?.nodes?.find(
    ({ fluid }: any) => fluid?.originalName === image
  )?.fluid as FluidObject | undefined;
}

type PlaylistProps = {
  image: string;
  id: string;
  name: string;
  link: string;
};

export default function Playlist({ image, link, name }: PlaylistProps) {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
            originalName
          }
        }
      }
    }
  `);

  return (
    <a href={link} target="_blank">
      <PlaylistImage fluid={getImage(image, data)} alt={name} />
    </a>
  );
}
