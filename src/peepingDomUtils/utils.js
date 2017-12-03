const journey = {
  meta: {},
  steps: [],
};

export const INTERACTION_TYPES = {
  REDUX_ACTION: 'REDUX_ACTION',
  URL_CHANGE: 'URL_CHANGE',
  ELEMENT_INTERACTION: 'ELEMENT_INTERACTION',
  SCROLL: 'SCROLL',
};

const SCROLL_THROTTLE = 500;

function highlightElement(interactionId) {
  const el = document.querySelector(`[data-interaction-id="${interactionId}"]`);

  const originalOutline = el.style.outline;
  el.style.outline = '5px solid rgba(255, 0, 0, 0.67';

  setTimeout(() => {
    el.style.outline = originalOutline;
  }, 2000);
}

export const startListeningForPlayback = (store) => {
  window.addEventListener('message', (message) => {
    if (!message || !message.type || !message.data) return; // not a message for us

    const { type, data } = message.data;

    switch (type) {
      case INTERACTION_TYPES.REDUX_ACTION:
        store.dispatch(data);
        break;
      case INTERACTION_TYPES.SCROLL:
        window.scrollTo(0, data);
        break;
      case INTERACTION_TYPES.ELEMENT_INTERACTION:
        highlightElement(data);
        break;
      default:
        // also not a message for us
        return;
    }
  });
};

export const startRecording = (store) => {
  journey.meta.startTime = Date.now();
  journey.meta.startUrl = document.location.href;
  journey.meta.screenWidth = window.innerWidth;
  journey.meta.screenHeight = window.innerHeight;

  let lastScrollCapture = performance.now();

  window.addEventListener('scroll', () => {
    const now = performance.now();

    if (now - lastScrollCapture < SCROLL_THROTTLE) return;

    // if the user scrolls a bit, pauses, scrolls, pauses, we don't want these as
    // individual events. So pop the last event if it's a scroll
    const lastEvent = journey.steps[journey.steps.length - 1];

    if (lastEvent && lastEvent.type === INTERACTION_TYPES.SCROLL) {
      journey.steps.pop();
    }

    journey.steps.push({
      type: INTERACTION_TYPES.SCROLL,
      data: window.scrollY,
    });

    lastScrollCapture = now;
  });

  // TODO (davidg): keypress for tab, esc, and enter
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

  journey.steps.push({
    time: Date.now(),
    type: INTERACTION_TYPES.ELEMENT_INTERACTION,
    data: e.target.dataset.interactionId,
  });
};

export const saveRecording = () => {
  journey.meta.endTime = Date.now();

  // The send it to a server somewhere

  // For dev, log it to the console
  if (process.env.NODE_ENV === 'development') {
    console.log('Journey recorded:', journey);
    window.__JOURNEY__ = journey;
    console.info('Type "copy(__JOURNEY__)" to copy it to the clipboard');
  }
};
