import React from 'react';
import Img from './Img';

const Character = (props) => (
    <div className="card text-white bg-primary mb-3"
        style={{maxWidth: "20rem"}}
        data-testid="character">
      <div className="card-body">
        <h4 className="card-title" data-testid="name">{props.character.name}</h4>
          <Img
            name={props.character.name}
            src={props.character.thumbnail.path+"."+props.character.thumbnail.extension}
          />
        <p className="card-text" data-testid="descr">{props.character.description}</p>
        <button
          className="btn btn-outline-secondary"
          data-testid="deleteButton"
          data-id={props.character.id} 
          onClick={props.removeCharacter}
        >
          Delete
        </button>
      </div>
    </div>
  );

  export default Character;