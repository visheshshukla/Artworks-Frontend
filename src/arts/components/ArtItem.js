import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import './ArtItem.css';

const ArtItem = props => {
  return (
    <li className="art-item">
      <Card className="art-item__content">
        <div className="art-item__image">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="art-item__info">
          <h2>{props.title}</h2>
          <h3>{props.address}</h3>
          <p>{props.description}</p>
        </div>
        <div className="art-item__actions">
          <Button inverse>VIEW ON MAP</Button>
          <Button to={`/arts/${props.id}`}>EDIT</Button>
          <Button danger>DELETE</Button>
        </div>
      </Card>
    </li>
  );
};

export default ArtItem;
