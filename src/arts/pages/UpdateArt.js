import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';

const UpdateArt = () => {
  const artId = useParams().artId;

  const identifiedArt = DUMMY_ARTS.find(p => p.id === artId);

  if (!identifiedArt) {
    return (
      <div className="center">
        <h2>Could not find art!</h2>
      </div>
    );
  }

  return (
    <form className="art-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identifiedArt.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={() => {}}
        value={identifiedArt.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        UPDATE ART
      </Button>
    </form>
  );
};

export default UpdateArt;
