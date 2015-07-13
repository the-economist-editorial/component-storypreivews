import React from 'react';
import Expander from '@economist/component-expander';

export default class StoryPreviews extends React.Component {

  static get propTypes() {
    return {
      stories: React.PropTypes.array,
    };
  }

  closeOthers(currentExpander) {
    this.props.stories.map((story, i) => {
      var expander = this.refs[`expander-${i}`];
      if (expander !== currentExpander) {
        expander.close();
      }
    })
  }

  render() {
    return (
      <div className="StoryPreviews">
        {this.props.stories.map((story, i) => {
          const header = (
            <div>
              <img src={story.image} className="Header--Image"/>
              <h1 className="Header--Speaker">{story.speaker}</h1>
              <h2 className="Header--Title">{story.title}</h2>
            </div>
          )
          const footer = (
            <div>
              <span className="closedLabel">Less</span>
              <span className="openLabel">More</span>
            </div>
          )
          return (
            <Expander ref={`expander-${i}`} header={header} footer={footer} onOpen={this.closeOthers.bind(this)}>
              <div dangerouslySetInnerHTML={ { __html: story.body } }></div>
            </Expander>
          )
        })}
      </div>
    );
  }

}






