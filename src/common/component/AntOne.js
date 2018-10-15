import React from 'react'

export default class AntOne extends React.Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (<div>
      antOneeeeeeeeeee {this.props.location.hash}
    </div>)
  }
}

