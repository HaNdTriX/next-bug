import React from 'react'
import dynamic from 'next/dynamic';

// Dynamically imported component
const Component = dynamic(import('../components/Component'));
const ForwardedRefComponent = React.forwardRef((props, ref) => (
  <Component {...props} forwardedRef={ref} />
))

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log('this.myRef', this.myRef)
  }

  render() {
    return <ForwardedRefComponent ref={this.myRef}/>;
  }
}
