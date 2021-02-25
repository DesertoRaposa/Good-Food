import React from 'react';
import RestoServiceContext from '../resto-service-context';

const WithRestoService = () => (Wrapped) => (
  (props) => (
    <RestoServiceContext.Consumer>
      {
        (RestoService) => (
          <Wrapped {...props} RestoService={RestoService} />
        )
      }
    </RestoServiceContext.Consumer>
  )
);

export default WithRestoService;
