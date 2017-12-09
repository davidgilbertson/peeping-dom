import React, { PureComponent } from 'react';
import mockJourneys from '../../data/mockJourneys';
import { INTERACTION_TYPES } from '../../peepingDomUtils/record';
import iPadLandscape from './iPadLandscape.png';
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
    const meta = this.state.currentJourney.meta;
    const src = this.state.currentUrl || meta.startUrl;

    // TODO, obviously handle more (or less) than just one device/orientation
    const isIpadLandscape = (
      /iPad/.test(meta.userAgent) &&
      meta.screenHeight === 768 &&
      meta.screenWidth === 1024
    );

    const dateString = new Date(meta.startTime).toLocaleDateString();

    return (
      <div className="JourneyPlayback__wrapper">
        <h1>Play back an error</h1>

        <select className="JourneyPlayback__select">
          <option>{meta.shortError} ({dateString})</option>
        </select>

        <button
          className="JourneyPlayback__next-button"
          onClick={this.doNextStep}
        >
          Next step
        </button>

        <p className="JourneyPlayback__url">URL: {src}</p>

        <div className="JourneyPlayback__device">
          {isIpadLandscape && (
            <img
              className="JourneyPlayback__iPad"
              src={iPadLandscape}
              alt=""
            />
          )}
          <iframe
            title="Playback window"
            className="JourneyPlayback__iframe"
            width={`${meta.screenWidth}px`}
            height={`${meta.screenHeight}px`}
            src={src}
            ref={(el) => { this.iFrame = el; }}
          />
        </div>
      </div>
    );
  }
}

export default JourneyPlayback;
