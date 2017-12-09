import debounce from 'lodash/debounce';

export const INTERACTION_TYPES = {
  REDUX_ACTION: 'Store updated',
  URL_CHANGE: 'Changed URL',
  ELEMENT_INTERACTION: 'Element interacted with',
  SCROLL: 'Window scrolled',
};

const journey = {
  meta: {},
  steps: [],
};

const startScrollCapturing = () => {
  function handleScroll() {
    const lastEvent = journey.steps[journey.steps.length - 1];

    if (lastEvent && lastEvent.type === INTERACTION_TYPES.SCROLL) {
      journey.steps.pop();
    }

    journey.steps.push({
      type: INTERACTION_TYPES.SCROLL,
      data: window.scrollY,
    });
  }

  window.addEventListener('scroll', debounce(handleScroll, 200));
};

export const captureActionMiddleware = () => next => action => {
  journey.steps.push({
    time: Date.now(),
    type: INTERACTION_TYPES.REDUX_ACTION,
    data: action,
  });

  return next(action);
};

export const captureCurrentUrl = () => {
  journey.steps.push({
    time: Date.now(),
    type: INTERACTION_TYPES.URL_CHANGE,
    data: document.location.href,
  });
};

export const captureInteraction = (e) => {
  if (!e || !e.target || !(e.target instanceof(HTMLElement))) {
    console.warn('You must pass an Event object to captureInteraction');

    return;
  }

  if (!e.target.dataset.interactionId) {
    console.warn('You cannot record an interaction for an element with no ID');
  }

  const elementData = {
    interactionId: e.target.dataset.interactionId,
  };

  if (e.target.textContent) elementData.textContent = e.target.textContent;

  journey.steps.push({
    time: Date.now(),
    type: INTERACTION_TYPES.ELEMENT_INTERACTION,
    data: elementData,
  });
};

export const startRecording = () => {
  journey.meta.startTime = Date.now();
  journey.meta.startUrl = document.location.href;
  journey.meta.screenWidth = window.innerWidth;
  journey.meta.screenHeight = window.innerHeight;
  journey.meta.userAgent = navigator.userAgent;

  startScrollCapturing();
};

export const sendErrorReport = (err) => {
  journey.meta.endTime = Date.now();
  journey.meta.shortError = err.message;
  journey.meta.error = `${err.message} (in ${err.filename} ${err.lineno}:${err.colno})`;

  fetch('/error', {
    method: 'POST',
    body: JSON.stringify(journey)
  })
  .catch(console.error);

  // For dev, log it to the console
  if (process.env.NODE_ENV === 'development') {
    console.log('Journey recorded:', journey);
    window.__JOURNEY__ = journey;
    console.info('Type "copy(__JOURNEY__)" to copy it to the clipboard');
  }
};
