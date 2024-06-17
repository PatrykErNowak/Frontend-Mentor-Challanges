import styles from './Error.module.css';

import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function Error() {
  const error = useRouteError();

  if (isRouteErrorResponse(error))
    return (
      <div className={styles.error}>
        <h1>Oops!</h1>
        <p>
          <i>{error.statusText}</i>
        </p>
      </div>
    );

  return null;
}

export default Error;
