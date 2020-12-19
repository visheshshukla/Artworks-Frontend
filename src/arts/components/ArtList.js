import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import ArtItem from './ArtItem';
import Button from '../../shared/components/FormElements/Button';
import './ArtList.css';

const ArtList = props => {
  if (props.items.length === 0) {
    return (
      <div className="art-list center">
        <Card>
          <h2>No arts found. Maybe create one?</h2>
          <Button to="/arts/new">Share Art</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="art-list">
      {props.items.map(art => (
        <ArtItem
          key={art.id}
          id={art.id}
          image={art.image}
          title={art.title}
          description={art.description}
          address={art.address}
          creatorId={art.creator}
          coordinates={art.location}
        />
      ))}
    </ul>
  );
};

export default ArtList;
