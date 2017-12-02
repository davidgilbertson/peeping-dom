const interactionHistory = [];
const sessionDetails = {
  startTime: 0,
  startUrl: '',
  endTime: 0,
};

const INTERACTION_TYPES = {
  REDUX_ACTION: 'REDUX_ACTION',
  URL_CHANGE: 'URL_CHANGE',
  ELEMENT_INTERACTION: 'ELEMENT_INTERACTION',
  SCROLL: 'SCROLL',
};

const THROTTLE = 500;

export const startRecording = () => {
  sessionDetails.startTime = Date.now();
  sessionDetails.startUrl = document.location.href;
  let lastScrollCapture = performance.now();

  window.addEventListener('scroll', () => {
    const now = performance.now();

    if (now - lastScrollCapture < THROTTLE) return;

    // if the user scrolls a bit, pauses, scrolls, pauses, we don't want these as
    // individual events. So pop the last event if it's a scroll
    const lastEvent = interactionHistory[interactionHistory.length - 1];

    if (lastEvent && lastEvent.type === INTERACTION_TYPES.SCROLL) {
      interactionHistory.pop();
    }

    interactionHistory.push({
      type: INTERACTION_TYPES.SCROLL,
      data: window.scrollY,
    });

    lastScrollCapture = now;
  });

  // TODO (davidg): keystrokes for tab, esc, and enter
  // Play them back as black toast
};

export const saveRecording = () => {
  console.log('  --  >  utils.js:47 > saveRecording ');
  sessionDetails.endTime = Date.now();
  const results = {
    sessionDetails,
    interactions: interactionHistory,
  };

  console.log('Session recorded:', results);
  window.__SESSION_RESULTS__ = results;
  console.info('Type "copy(__SESSION_RESULTS__)" to copy them to the clipboard');
};

export const captureActionMiddleware = () => next => action => {
  interactionHistory.push({
    type: INTERACTION_TYPES.REDUX_ACTION,
    data: action,
  });

  return next(action);
};

export const captureCurrentUrl = () => {
  interactionHistory.push({
    type: INTERACTION_TYPES.URL_CHANGE,
    data: document.location.href,
  });
};

export const captureInteraction = (e) => {
  console.log('  --  >  utils.js:63 > captureInteraction > e:', e);
  console.log('Typeof:', typeof e);
  if (!e || !e.target || !(e.target instanceof(HTMLElement))) {
    console.warn('You must pass an Event object to captureInteraction');

    return;
  }

  if (!e.target.dataset.interactionId) {
    console.warn('You cannot record an interaction for an element with no ID');
  }

  interactionHistory.push({
    type: INTERACTION_TYPES.ELEMENT_INTERACTION,
    data: e.target.dataset.interactionId,
  });
};

// expose to the world for testing
if (process.env.NODE_ENV === 'development') {
  window.INTERACTIONHISTORY = interactionHistory;
}
