Backed by the News API, we are able to receive news and the attributes of these news in JSON format. 

By using a service-worker, we are able to store any static content and access the web app even while offline. Once we load the website, the service worker is registered and is the cache is updated everytime we reload the web app. This allows for the web app's loading time to match that of a native app.

### `To install any dependencies`
#### `npm install`

### `To run the app in Development Mode`
#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console. 
Perks of hot-reloading. :)

### `To test the Service Worker`
![](servicemem.jpeg) 

#### `npm run build`

We must build the app and run an http server from our build directory. 
It is optimal to run it in incognito mode to avoid issues with your current browser cache.


### `Performance Report by Lighthouse`
![](performancetest.png)

#### `Backlogs (on-pause due to final exams):`
 - Filtering News according to keywords,domains,etc.
 - Clean Manifest
 - Functional Tests
 
 
PS: borrowed some CSS for quick styling. :3
