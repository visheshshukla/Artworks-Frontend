import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import { useHttpClient } from '../../shared/hooks/http-hook';
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import { AuthContext } from '../../shared/context/auth-context';
import './ArtForm.css';

const UpdateArt = () => {
  const [loadedArt, setLoadedArt] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const artId = useParams().artId;
  const histroy = useHistory();
  const auth = useContext(AuthContext);

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
  
  useEffect(() => {
    const fetchArt = async () => {
      try {
        const reponseData = await sendRequest(`http://localhost:5000/api/arts/${artId}`);
        setLoadedArt(reponseData.art);
        setFormData(
          {
            title: {
              value: reponseData.art.title,
              isValid: true
            },
            description: {
              value: reponseData.art.description,
              isValid: true
            }
          },
          true
        );
      }
      catch (err) {}
    };
    fetchArt();
  }, [sendRequest, artId,setFormData]);

  const artUpdateSubmitHandler = async event => {
    event.preventDefault();
    try {
      await sendRequest(`http://localhost:5000/api/arts/${artId}`, 
      'PATCH', 
      JSON.stringify({
        title: formState.inputs.title.value,
        description: formState.inputs.description.value
      }),
      {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + auth.token
      }
      );
      histroy.push('/' + auth.userId + '/arts');
    }
    catch(err) {}
  };

  if (isLoading) {
    return (
      <div className="center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!loadedArt && !error) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find art!</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {!isLoading && loadedArt && 
      (<form className="art-form" onSubmit={artUpdateSubmitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={loadedArt.title}
          initialValid={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description (min. 5 characters)."
          onInput={inputHandler}
          initialValue={loadedArt.description}
          initialValid={true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE ART
        </Button>
      </form>)}
    </React.Fragment>
  );
};

export default UpdateArt;
