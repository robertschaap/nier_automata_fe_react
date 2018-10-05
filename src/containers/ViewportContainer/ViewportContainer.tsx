import * as React from 'react';

import { Viewport } from 'components/Viewport';

interface ViewportContainerProps {
  shouldScale: boolean;
}

interface ViewportContainerState {
  scale: number;
}

class ViewportContainer extends React.Component<ViewportContainerProps, ViewportContainerState> {
  scale = 1;

  state = {
    scale: this.scale,
  };

  componentDidMount() {
    window.addEventListener('resize', this.calculateMinRatio);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateMinRatio);
  }

  calculateMinRatio = () => {
    const widthRatio = window.innerWidth / 1920;
    const heightRatio = window.innerHeight / 1080;

    this.setState({
      scale: Math.min(widthRatio, heightRatio),
    });
  }

  render() {
    const { shouldScale } = this.props;

    return (
      <Viewport scaleRatio={shouldScale ? this.state.scale : this.scale} />
    );
  }
}

export default ViewportContainer;
