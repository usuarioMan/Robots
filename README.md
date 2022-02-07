# React Fundamentals

- Makes the DOM easy to scale
- Handles the web as small components
- Components are combined to add functionality
- Components can be reused to be used in multiple pages such as buttons and navigation bars

### One way data flow

- Data flows from top to bottom, direction is always downstream, only the nodes below of other nodes react to change

![Source: [https://github.com/undefinedschool/notes-react-principles](https://github.com/undefinedschool/notes-react-principles)](React%20Fundamentals%203c6730eecbc046749721daf202527027/Untitled.png)

Source: [https://github.com/undefinedschool/notes-react-principles](https://github.com/undefinedschool/notes-react-principles)

### Virtual DOM

React BOT creates a virtual javascript object, which describes the current state of the website. The React BOT will make changes to this object and start to paint it and manipulate it. This is done instead of making GetElementById, React BOT just changes the view.

```jsx
class Clock extends React.Component {
	constructor(props) {
			super(props);
			this.state = { date: new Date() }
	}
}
```

### Creating React App

```bash
npx create-react-app mi-aplicacion
```

### Starting application

```bash
npm start
```

### package.json

```bash
{
  "name": "ReplitReactjsProject",
  "version": "0.0.1",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "dependencies": {
    "@types/react": "^17.0.13",
    "@types/react-dom": "^17.0.8",
    "@vitejs/plugin-react-refresh": "^1.3.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "vite": "^2.3.8"
  }
}
```

<aside>
💡 Installing react-scripts will allow us to do testing and other stuff (see how to integrate in scripts inside package.json)

</aside>

### App content

`<div id=”root”>` is where React calls our **React App**, this is in `index.html` in `/public` folder

```html
<body>
<div id="root"></div>
<script type="module" src="/src/main.jsx"></script>
</body>
```

Our **React App** is inside `/src` folder, inside of `index.js` (or main.js), there is a `getElementById(’root’)`. The first thing that is firstly called.

```jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
```

ReactDOM connects the React Components with the DOM. You always need two packages: the main react library and one connector, in this case ReactDOM

We also import a css (index.css)

And also import App from /App which we are rendering as <App /> in ReactDom.Render, this App is renderes inside the “root div” in the DOM. The visual content of the App is defined in App.js component.
