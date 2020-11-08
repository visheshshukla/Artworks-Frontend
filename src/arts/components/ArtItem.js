import React from 'react';

import Card from '../../shared/components/UIElements/Card';
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
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default ArtItem;
