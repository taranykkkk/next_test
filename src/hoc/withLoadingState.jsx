import styles from './withLoadingState.module.scss';

function withLoadingState(Component, event) {
  return ({ isLoading, ...rest }) => {
    return (
      <div className={styles.loading_container}>
        {isLoading && (
          <div className={styles.spinner}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <Component {...rest} isLoading={isLoading} />
      </div>
    );
  };
}

export default withLoadingState;
