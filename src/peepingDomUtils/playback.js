import { INTERACTION_TYPES } from './record';

function highlightElement(interactionId) {
  const selector = `[data-interaction-id="${interactionId}"]`;
  const el = document.querySelector(selector);

  if (!el) {
    console.warn('Could not find an element with the selector:', selector);
  }

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
        highlightElement(data.interactionId);
        break;
      default:
        // also not a message for us
        return;
    }
  });
};
