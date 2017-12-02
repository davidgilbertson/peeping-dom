const interactionHistory = [];

const INTERACTION_TYPES = {
  REDUX_ACTION: 'REDUX_ACTION',
  URL_CHANGE: 'URL_CHANGE',
  ELEMENT_INTERACTION: 'ELEMENT_INTERACTION',
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
  if (!e.target) {
    console.warn('This is not right:', e);

    return;
  }

  const id = e.target.dataset.interactionId || e.target.id;

  if (!id) {
    console.warn('You cannot record an interaction for an element with no ID');
  }

  interactionHistory.push({
    type: INTERACTION_TYPES.ELEMENT_INTERACTION,
    data: id,
  });
};

// expose to the world for testing
if (process.env.NODE_ENV === 'development') {
  window.INTERACTIONHISTORY = interactionHistory;
}
