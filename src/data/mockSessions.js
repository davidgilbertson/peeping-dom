export default [
  {
    "sessionDetails": {
      "startTime": 1512253986575,
      "startUrl": "http://localhost:3000/",
      "endTime": 1512254003143
    },
    "interactions": [
      {
        "type": "ELEMENT_INTERACTION",
        "data": "Top nav link: Product list"
      },
      {
        "type": "URL_CHANGE",
        "data": "http://localhost:3000/product-list"
      },
      {
        "type": "SCROLL",
        "data": 998
      },
      {
        "type": "ELEMENT_INTERACTION",
        "data": "Product search input"
      },
      {
        "type": "REDUX_ACTION",
        "data": {
          "type": "CHANGE_SEARCH_QUERY",
          "query": "chair"
        }
      },
      {
        "type": "SCROLL",
        "data": 672
      },
      {
        "type": "ELEMENT_INTERACTION",
        "data": "Product details button: 7"
      },
      {
        "type": "URL_CHANGE",
        "data": "http://localhost:3000/details?productId=7"
      },
      {
        "type": "SCROLL",
        "data": 0
      },
      {
        "type": "ELEMENT_INTERACTION",
        "data": "Buy product button: 7"
      }
    ]
  }
];
