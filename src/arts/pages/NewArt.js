import React from 'react';

import Input from '../../shared/components/FormElements/Input';
import './NewArt.css';

const NewArt = () => {
  return (
    <form className="art-form">
      <Input element="input" type="text" label="Title" />
    </form>
  );
};

export default NewArt;