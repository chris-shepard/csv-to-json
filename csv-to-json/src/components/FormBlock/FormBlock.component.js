import React from 'react';

const FormBlock = ({id, name, title, ...otherFormProps}) => {
  return (
    <form>
      <fieldset>
        <legend>{title}</legend>
        <label for={name}>
          <input id={id} name={name} {...otherFormProps}></input>
        </label>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}

export default FormBlock;