import usePlaceholder from './usePlaceholder';

const Img = ({name, src}) => {
    const url = usePlaceholder(src);
  
    return (
      <img
        style={{maxWidth: "18rem"}}
        data-testid="picture"
        alt={name}
        src={url}
      />
    )
  }

  export default Img;