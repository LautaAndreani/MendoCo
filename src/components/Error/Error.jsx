import { ErrorContainer } from "./Error.styles";

function Error({ mensaje }) {
  return (
    <ErrorContainer>
      <h3 className="error-msg">{mensaje}</h3>
    </ErrorContainer>
  );
}

export default Error;
