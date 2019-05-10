## A Progressive  Web Application powered by NewsAPI(https://www.newsapi.org) :fire:
<br />
<br />
We've always thought about how a personalised news feed would be like. Look no further! We are able to receive personalised news at through multiple sources and from several categories with the help of NewsAPI.

### PWA-Aspect
In a progressive web application, we make use of a service worker to give an native app-like experience to the users through the PWA itself. By using a service-worker, we are able to store any static content and access the web app even while offline. Once we load the website, the service worker is registered and is the cache is updated everytime we reload the web app. This allows for the web app's loading time to match that of a native app.
<br />

### Why use ReactJS?
ReactJS is a good option for PWAs because it offers to add a manifest and generates the service-worker by default which makes the programming in React much more intuitive.
<br />
<br />

## Let's fire it up and get it running!

### 1. To install any dependencies
#### `npm install`
<br />
### 2. To run the app in Development Mode
#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console. 
Perks of hot-reloading. :)
<br />
### To test the Service Worker
![](servicemem.jpeg) 

#### `npm run build`

We must build the app and run an http server from our build directory in order to see the Service Worker's effect because it is only enabled in production environment.
It is optimal to run it in incognito mode to avoid issues with your current browser cache.
<br />
### 3. Running the application with ServiceWorker:
Once the application is build for production , we can serve it locally on our http server.

#### `serve -s build`
![](screenhpge.png)


![](screenswkr.png)
Service Worker


<br />

### Performance Report by Lighthouse(web development tool)

![](performance.png)

Note: Best Practices rating is lower because the app was being served locally i.e HTTP instead of HTTPS.
<br />
<br />

#### Pending (on-pause due to final exams):

 1. Filtering News according to categories, keywords,etc.
 2. Clean Manifest
 3. Functional Tests
 
 <br />
 
**Note**: 

Borrowed some CSS for styling.
 
