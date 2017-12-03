export default [
  {
    "meta": {
      "startTime": 1512288180319,
      "startUrl": "http://localhost:3000/",
      "screenWidth": 768,
      "screenHeight": 1024,
      "endTime": 1512288191629
    },
    "steps": [
      {
        "time": 1512288182083,
        "type": "ELEMENT_INTERACTION",
        "data": "Top nav link: Product list"
      },
      {
        "time": 1512288182083,
        "type": "URL_CHANGE",
        "data": "http://localhost:3000/product-list"
      },
      {
        "time": 1512288182093,
        "type": "ELEMENT_INTERACTION",
        "data": "Product search input"
      },
      {
        "time": 1512288183299,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "c"
        }
      },
      {
        "time": 1512288183431,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "ch"
        }
      },
      {
        "time": 1512288183511,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "cha"
        }
      },
      {
        "time": 1512288183631,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chai"
        }
      },
      {
        "time": 1512288183719,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chair"
        }
      },
      {
        "type": "SCROLL",
        "data": 323
      },
      {
        "time": 1512288189744,
        "type": "ELEMENT_INTERACTION",
        "data": "Product details button: 5"
      },
      {
        "time": 1512288189744,
        "type": "URL_CHANGE",
        "data": "http://localhost:3000/details?productId=5"
      },
      {
        "type": "SCROLL",
        "data": 0
      },
      {
        "time": 1512288191629,
        "type": "ELEMENT_INTERACTION",
        "data": "Buy product button: 5"
      }
    ]
  }
];
