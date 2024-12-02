# image crawler
## How to Use
1. Input `link` and `name` in `request.json`
```json
[
  {
    "name": "Augment_13600",
    "link": "https://azurlane.netojuu.com/images/2/20/Augment_13600.png"
  }
]
```

2. Modify `app.js` for your purpose
```js
await imageCase(response);
// await nationCase(response);
```

3. run
```shell
yarn start
```