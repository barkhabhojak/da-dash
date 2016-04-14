import React from 'react';
import Immutable from 'immutable';
import { Panel } from 'react-bootstrap';
import ListItem from './ListItem';
const title = (
  <h3>Intranet</h3>
);
const Mini = ({ location, goToPath }, context) => {
  if (location.count() === 0) {
    location = Immutable.fromJS([{
      isFile: false,
      name: 'Intranet',
      path: [],
    }]);
  }
  const goToIntranet = (toPath) => {
    context.router.push('/intranet');
    goToPath(toPath);
  }
  return (
    <Panel header={title}>
      <ListItem items={location} goToPath={goToIntranet} />
    </Panel>
  );
};

Mini.contextTypes = {
  router: React.PropTypes.object.isRequired,
};

Mini.propTypes = {
  location: React.PropTypes.object,
  goToPath: React.PropTypes.func,
};

Mini.defaultProps = {
  location: Immutable.fromJS([{
    isFile: false,
    name: 'Intranet',
    path: [],
  }]),
};

export default Mini;
