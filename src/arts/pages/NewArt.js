import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewArt.css';

const NewArt = () => {
  return (
    <form className="art-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please enter a valid title."
      />
    </form>
  );
};

export default NewArt;