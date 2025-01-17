
# Food Delivery 

E-commerce website

![Logo](https://food-delivery-psi-dusky.vercel.app/static/media/res-logo.2f9021c4ef5fe532038e.png)


## Features

- Shopping cart
- Search & Fillter 
- pagination
- Lazy-Loading


## Tech Stack

**Client:** CSS, React, Redux-toolkit,
React-bootstarp, react-slick slider, react-paginate


## Usage/Examples

```javascript
import React, { Suspense, lazy } from "react";
import "./App.css";
const LazyLayout = lazy(() => import("./Components/Layout/Layout"));
function App() {
  return (
    <div className="App">
      <Suspense fallback={loadding...}>
        <LazyLayout />
      </Suspense>
    </div>
  );
}
export default App;
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/mohamedmagdy007/delivery-app.git
```

Go to the project directory

```bash
  cd delivery-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Deployment

To deploy this project run

```bash
https://food-delivery-psi-dusky.vercel.app
```
