import React, {Component} from 'react';
import { connect } from 'react-redux';
import './items.css';

export class Items extends Component {
  renderList= () => {
    const { items } = this.props;
    return items.map((item) => (
      <li key={item.id}
          className={'Items-list-item'}
          onClick={() => console.log('added to store')}
      >
        <img role="presentation" src={item.link} />
        <span>{item.title}</span>
      </li>
    ))
  }
  render() {
    return (
      <ul className={'Items-list'}>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (reduxState) => ({
  items: reduxState.items
});

export default connect(mapStateToProps)(Items);
