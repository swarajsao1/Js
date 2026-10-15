# Interactive To-Do List

A browser-based task management application built with HTML, CSS, and JavaScript.

## Features

- Add tasks with input validation.
- Mark tasks as completed or incomplete.
- Delete individual tasks, including tasks with duplicate text.
- Display total, completed, and remaining task counts.
- Save and restore tasks using browser `localStorage`.
- Preserve task IDs and completion status after refreshing.
- Handle empty task lists.

## Technologies

- HTML5
- CSS3
- JavaScript
- Browser DOM API
- `localStorage` and JSON

## Project Structure

```text
project-04-todo-list/
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Clone or download this project.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.
4. Add, complete, and delete tasks.

## JavaScript Concepts Practised

- Variables, functions, and conditional statements
- Arrays, objects, and loops
- DOM manipulation and event listeners
- Array methods such as `push()`, `filter()`, and `map()`
- Unique task identifiers
- Rendering UI from application state
- JSON serialization and parsing
- Browser storage and error handling

## Future Improvements

- Edit existing tasks.
- Filter tasks by completion status.
- Add task deadlines and priorities.
- Improve accessibility and responsive styling.
- Export and import tasks.

## Learning Objective

This project demonstrates how to build an interactive web application while keeping task data synchronized with the user interface and preserving state across page reloads.