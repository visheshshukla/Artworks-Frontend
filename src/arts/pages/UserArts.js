import React from 'react';

import ArtList from '../components/ArtList';

const DUMMY_ARTS = [
  {
    id: 'p1',
    title: 'Art 1',
    description: 'One of the most famous painting in the world!',
    imageUrl: 'https://res.cloudinary.com/vishesh123/image/upload/v1598877183/m18lqtmbvsvrqswlcmmj.jpg',
    address: 'Agra, U.P., India',
    location: {
      lat: 27.1767,
      lng: 78.0081
    },
    creator: 'u1'
  },
  {
    id: 'p2',
    title: 'Art 2',
    description: 'Another famous painting in the world!',
    imageUrl: 'https://res.cloudinary.com/vishesh123/image/upload/v1598880593/nh5xl27vna1r0xsweqk9.png',
    address: 'Mumbai, Maharastra, India',
    location: {
      lat: 19.07,
      lng: 72.87
    },
    creator: 'u2'
  }
];

const UserArts = () => {

  return <ArtList items={DUMMY_ARTS} />;
};

export default UserArts;