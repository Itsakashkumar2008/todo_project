# My Simple Todo Web App

This is a clean, single-page Todo List application built using basic frontend web development concepts. It allows users to add tasks, toggle completion states, and delete items from a central task card.

## 📁 Project Layout
The project workspace is organized using three files:
- `index4.html` - The structural skeleton containing the form inputs, text summary headers, and empty list zones.
- `styles.css` - Custom style layouts utilizing Flexbox to center the main card and align task list rows cleanly.
- `app.js` - The dynamic logic core managing event tracking handlers and user data storage actions.

## ⚙️ Core Application Features
- **Local Browser Storage:** All active tasks are saved directly into the browser's native `localStorage` engine. This ensures your data stays safe and won't disappear when you refresh your page or close your browser tab.
- **Centred Layout:** The application layout uses standard CSS flexbox rules on the `body` tag to keep the todo container card perfectly centered in the middle of any desktop viewport.
- **Dynamic Counters:** The layout monitors and updates the total counts section instantly whenever tasks are submitted or deleted.
- **Visual Feedback:** Shows a dedicated empty state block when no tasks exist, and switches to a custom red background when hovering over delete actions.

## 🛠️ How to Open and Run the Code

Since this project runs entirely on the client side without a backend server terminal, starting it is incredibly simple:

1. Download or clone this folder onto your computer.
2. Locate the file named `index.html` inside your file browser.
3. **Double-click `index.html`** to launch it directly inside your default web browser (or right-click and open it with VS Code's "Live Server" extension).
4. Start adding your daily tasks immediately!

## 📋 Developed JavaScript Actions
- `addTask(event)` - Intercepts standard form submission page reloads, validates blank inputs, pushes raw task objects into data chains, and updates the view.
- `saveTasks()` - Saves current tasks into a local browser cache array via `JSON.stringify()`.
- `showTasks()` - Completely empties out previous visual lists, loops through the data array, creates functional HTML tags (`createElement`), and injects them onto the screen.
