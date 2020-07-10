import React from 'react';
import useForm from '../hooks/useForm';
import TextInput from './inputs/TextInput';
import TextareaInput from './inputs/TextareaInput';
import SelectInput from './inputs/SelectInput';
import TimeInput from './inputs/TimeInput';

function KeyPair() {
  return (
    <div className="info">
      <h6>Key pair generation</h6>
      <p>
        This short guide will help you to generate a key pair via the OpenSSL command line tool, in order to
        provide the public key to Bridge.
        <br /><br />
        Generate an EC private key, of size 256, and output it to a file named key.pem:
        >> $ openssl ecparam -name secp256k1 -genkey -out key.pem
        <br /><br />
        Extract the public key from the key pair, which can be used in the encryption:
        >> $ openssl ec -in key.pem -pubout -out public.pem
        <br /><br />
        After running these two commands you will generate two files: key.pem and public.pem in your working
        directory. Please provide us with the public.pem
        key.pem is referenced in the creation of a digital signature on the message. Please take care not to
        expose the private key. Ensure that you only do so on a system you consider to be secure.
      </p>
    </div>
  );
}

function CTAtxt() {
  return (
    <p className="text">
      If you have any questions with the information in this email, please let us know at 
      <a href="mailto:contact@sygna.io"> contact@sygna.io</a> or visit our website at 
      <a href="sygna.io" target="_blank"> sygna.io</a>
    </p>
  );
}

function FormPanel({ title, btnName, submitCallback, model }) {
  const [inputs, setInputs, setSubmit] = useForm(model, submitCallback);

  const Components = { TextInput, TextareaInput, SelectInput, TimeInput };

  const capitalize = expression => expression.charAt(0).toUpperCase() + expression.slice(1);

  const renderInput = input => {
    const Component = Components[capitalize(input.type) + 'Input'];
    return <Component key={input.name} setInputs={setInputs} {...input} />;
  }

  return (
    <div className="container">
      <div className="intro">
        <h2 className="title">{title}</h2>
      </div>
      <form id="registration_form">
        {inputs.map(input => renderInput(input))}
        <KeyPair />
        <div className="cta_block">
          <CTAtxt />
          <div className="cta">
           <input type="submit" onClick={setSubmit} value={btnName} className="btn btn-primary" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormPanel;