import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageTransition = Page => {
  return props =>
    <div className="page">
      {/* SlideIn or SlideOut (can add conditionals!) */}
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName={'SlideOut'}>
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};
export default PageTransition;