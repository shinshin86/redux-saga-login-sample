# redux-saga-login-sample

Login sample using Redux-Saga.

## Usage

Install packages

```bash
yarn install
```

Start app (Development server)

```bash
yarn dev
```

Lint check and code format

```bash
yarn fmt
```

## Another code(Login flow)

I try also wrote another code. If you want to apply this one, you need to do the following.

```diff
diff --git a/src/store.js b/src/store.js
--- a/src/store.js
+++ b/src/store.js
@@ -2,7 +2,8 @@ import { createStore, applyMiddleware } from 'redux'
 import createSagaMiddleware from 'redux-saga'
 import { createLogger } from 'redux-logger'
 import rootReducer from './reducers'
-import rootSaga from './sagas'
+// import rootSaga from './sagas'
+import rootSaga from './sagas/index2'
 import history from './history'

 export default function configureStore() {
```
