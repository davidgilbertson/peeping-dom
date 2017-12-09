
export default [
  {
    "meta": {
      "startTime": 1512794304097,
      "startUrl": "http://localhost:3000/",
      "screenWidth": 1024,
      "screenHeight": 768,
      "userAgent": "Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",
      "endTime": 1512794314127,
      "shortError": "Uncaught TypeError: Cannot read property 'toLocaleString' of undefined",
      "error": "Uncaught TypeError: Cannot read property 'toLocaleString' of undefined (in http://localhost:3000/static/js/bundle.js 39135:99)"
    },
    "steps": [
      {
        "time": 1512794305515,
        "type": "Element interacted with",
        "data": {
          "interactionId": "Top nav link: Product list",
          "textContent": "Product list"
        }
      },
      {
        "time": 1512794305515,
        "type": "Changed URL",
        "data": "http://localhost:3000/product-list"
      },
      {
        "time": 1512794305529,
        "type": "Element interacted with",
        "data": {
          "interactionId": "Product search input"
        }
      },
      {
        "time": 1512794307002,
        "type": "Store updated",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "c"
        }
      },
      {
        "time": 1512794307101,
        "type": "Store updated",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "ch"
        }
      },
      {
        "time": 1512794307204,
        "type": "Store updated",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "cha"
        }
      },
      {
        "time": 1512794307367,
        "type": "Store updated",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chai"
        }
      },
      {
        "time": 1512794309042,
        "type": "Store updated",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chair"
        }
      },
      {
        "type": "Window scrolled",
        "data": 400
      },
      {
        "time": 1512794311435,
        "type": "Element interacted with",
        "data": {
          "interactionId": "Product details button: prod-98429-3",
          "textContent": "Details"
        }
      },
      {
        "time": 1512794311436,
        "type": "Changed URL",
        "data": "http://localhost:3000/details?productId=prod-98429-3"
      },
      {
        "type": "Window scrolled",
        "data": 36
      },
      {
        "time": 1512794314117,
        "type": "Element interacted with",
        "data": {
          "interactionId": "Buy product button: prod-98429-3",
          "textContent": "Buy this for $"
        }
      }
    ]
  }
];
