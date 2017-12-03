import React, { PureComponent } from 'react';
import mockJourneys from '../../data/mockJourneys';
import { INTERACTION_TYPES } from '../../peepingDomUtils/utils';
import './JourneyPlayback.css'

class JourneyPlayback extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      currentJourney: mockJourneys[0],
      currentUrl: null,
    };

    this.doNextStep = this.doNextStep.bind(this);
  }

  doNextStep() {
    this.setState((state) => {
      const nextStep = state.currentJourney.steps[state.currentStep];
      if (!nextStep) return;

      const nextState = {
        currentStep: state.currentStep + 1,
      };

      if (nextStep.type === INTERACTION_TYPES.URL_CHANGE) {
        nextState.currentUrl = nextStep.data;
      } else {
        this.iFrame.contentWindow.postMessage(nextStep, '*');
      }

      return nextState;
    })
  }

  render () {
    const { state } = this;
    const meta = state.currentJourney.meta;
    const src = state.currentUrl || meta.startUrl;

    return (
      <div className="JourneyPlayback__wrapper">
        <h1>Playing back a user journey</h1>

        <button
          className="JourneyPlayback__next-button"
          onClick={this.doNextStep}
        >
          Next step
        </button>

        <p className="JourneyPlayback__url">URL: {src}</p>

        <iframe
          title="Playback window"
          className="JourneyPlayback__iframe"
          width={`${meta.screenWidth}px`}
          height={`${meta.screenHeight}px`}
          src={src}
          ref={(el) => { this.iFrame = el; }}
        />
      </div>
    );
  }
}

export default JourneyPlayback;
