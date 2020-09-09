import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { View } from '@tarojs/components';
import ContextProvider from '../../contexts/context-provider';
import ToolView from './toolView';
import { CONFIG_PLACE, CONFIG_THEME } from './config';
import './index.less';

class CTooltip extends Component {
  static contextType = ContextProvider;

  target = null;

  timestamp = new Date().getTime().toString();

  state = {
    visible: false,
  };

  tipRef = React.createRef();

  componentDidMount() {
    if (this.props.visible) {
      this.setState({
        visible: true,
      });
      this.target = this.tipRef.current.firstElementChild;
    }
  }

  get document() {
    return this.context.rootDocument;
  }

  get portal() {
    const { getContext } = this.context;
    return getContext() || this.document.body;
  }

  getChildren() {
    const { children } = this.props;
    const __children = createElement('span', null, [children]);
    return __children;
  }

  getTooltipParent(element) {
    const { parentElement } = element;
    if (!element.className.includes(this.timestamp)) {
      return this.getTooltipParent(parentElement);
    }
    return element;
  }

  showTips = ({ target }) => {
    const { mouseEnterDelay, content, visible } = this.props;

    if (content && (visible || visible === undefined)) {
      this.target = this.getTooltipParent(target);

      setTimeout(() => {
        this.setState({ visible: true });
      }, mouseEnterDelay);
    }
  };

  closeTips = () => {
    const { mouseLeaveDelay, visible } = this.props;

    if (!visible) {
      setTimeout(() => {
        this.setState({ visible: false });
      }, mouseLeaveDelay);
    }
  };

  renderView() {
    const { target } = this;

    return ReactDOM.createPortal(
      <ToolView
        {...{
          ...this.props,
          target,
        }}
      />,
      this.portal
    );
  }

  render() {
    const { visible } = this.state;
    const { children } = this.props;

    const props = {
      style: { display: 'contents' },
      onMouseLeave: this.closeTips,
      onMouseEnter: this.showTips,
      ref: this.tipRef,
    };

    return (
      <>
        <View {...props} className={this.timestamp}>
          {typeof children !== 'object' ? this.getChildren(children) : children}
        </View>

        {visible && this.renderView()}
      </>
    );
  }
}

CTooltip.propTypes = {
  content: PropTypes.oneOfType([PropTypes.node, PropTypes.func, PropTypes.string]),
  mouseEnterDelay: PropTypes.number,
  mouseLeaveDelay: PropTypes.number,
  visible: PropTypes.bool,
  placement: PropTypes.oneOf([
    CONFIG_PLACE.auto,
    CONFIG_PLACE.top,
    `${CONFIG_PLACE.top}-${CONFIG_PLACE.left}`,
    `${CONFIG_PLACE.top}-${CONFIG_PLACE.right}`,
    CONFIG_PLACE.bottom,
    `${CONFIG_PLACE.bottom}-${CONFIG_PLACE.left}`,
    `${CONFIG_PLACE.bottom}-${CONFIG_PLACE.right}`,
    CONFIG_PLACE.left,
    `${CONFIG_PLACE.left}-${CONFIG_PLACE.top}`,
    `${CONFIG_PLACE.left}-${CONFIG_PLACE.bottom}`,
    CONFIG_PLACE.right,
    `${CONFIG_PLACE.right}-${CONFIG_PLACE.top}`,
    `${CONFIG_PLACE.right}-${CONFIG_PLACE.bottom}`,
  ]),
  theme: PropTypes.oneOf([CONFIG_THEME.dark, CONFIG_THEME.light, CONFIG_THEME.error]),
  className: PropTypes.string,
};

CTooltip.defaultProps = {
  content: '',
  mouseEnterDelay: 1,
  mouseLeaveDelay: 1,
  visible: undefined,
  placement: CONFIG_PLACE.auto,
  theme: CONFIG_THEME.dark,
  className: '',
};

export default CTooltip;
