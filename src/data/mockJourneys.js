export default [
  {
    "meta": {
      "startTime": 1512282535086,
      "startUrl": "http://localhost:3000/product-list",
      "screenWidth": 768,
      "screenHeight": 1024,
      "endTime": 1512282546137
    },
    "steps": [
      {
        "time": 1512282537320,
        "type": "ELEMENT_INTERACTION",
        "data": "Product search input"
      },
      {
        "time": 1512282539047,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "c"
        }
      },
      {
        "time": 1512282539159,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "ch"
        }
      },
      {
        "time": 1512282539249,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "cha"
        }
      },
      {
        "time": 1512282539390,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chai"
        }
      },
      {
        "time": 1512282539542,
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chair"
        }
      },
      {
        "type": "SCROLL",
        "data": 1048
      },
      {
        "time": 1512282544463,
        "type": "ELEMENT_INTERACTION",
        "data": "Product details button: 7"
      },
      {
        "time": 1512282544464,
        "type": "URL_CHANGE",
        "data": "http://localhost:3000/details?productId=7"
      },
      {
        "type": "SCROLL",
        "data": 0
      },
      {
        "time": 1512282546137,
        "type": "ELEMENT_INTERACTION",
        "data": "Buy product button: 7"
      }
    ]
  }
];
