import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './ArtForm.css';

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

const UpdateArt = () => {
  const [isLoading, setIsLoading] = useState(true);
  const artId = useParams().artId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false
      },
      description: {
        value: '',
        isValid: false
      }
    },
    false
  );
  
  const identifiedArt = DUMMY_ARTS.find(p => p.id === artId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedArt.title,
          isValid: true
        },
        description: {
          value: identifiedArt.description,
          isValid: true
        }
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedArt]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedArt) {
    return (
      <div className="center">
        <h2>Could not find art!</h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="art-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE ART
      </Button>
    </form>
  );
};

export default UpdateArt;
