import PropTypes from 'prop-types';

class CollegeBandModel {

  get schema() {

    return {};

  }

  constructor(params) {

    PropTypes.checkPropTypes(this.schema, params, 'params', 'Track');

    this.props = params;

  }

}

export default CollegeBandModel;
