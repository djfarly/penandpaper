import React, { Children } from 'react';
import { sx } from '~/utils/sx';

const Container = sx.Flex({
  mx: [-2, -3, -3, -4],
  flexWrap: 'wrap',
  justifyContent: 'center',
});

const Item = sx.Box({ p: [2, 3, 3, 4], flexBasis: ['100%', '50%', '33.33%'] });

type PlaylistListProps = {
  children: React.ReactNode;
};

export default function PlaylistList({ children }: PlaylistListProps) {
  return (
    <Container>
      {Children.map(children, child => (
        <Item key={(child as any)?.key}>{child}</Item>
      ))}
    </Container>
  );
}
