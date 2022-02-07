# React Fundamentals

- Makes the DOM easy to scale
- Handles the web as small components
- Components are combined to add functionality
- Components can be reused to be used in multiple pages such as buttons and navigation bars

### One way data flow

- Data flows from top to bottom, direction is always downstream, only the nodes below of other nodes react to change

![Source: [https://github.com/undefinedschool/notes-react-principles](https://github.com/undefinedschool/notes-react-principles)](notes-images/Untitled.png)

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

### Starting React App

```bash
npx create-react-app mi-aplicacion
```
