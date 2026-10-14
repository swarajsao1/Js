# Digital Clock and Stopwatch

A browser-based digital clock and stopwatch built using HTML, CSS, and JavaScript. This project demonstrates real-time updates, event handling, elapsed-time measurement, and timer management.

## Features

### Digital Clock
- Displays the current local time in `HH:MM:SS` format.
- Updates automatically every second.
- Formats hours, minutes, and seconds with leading zeros.

### Stopwatch
- Start, stop, resume, and reset controls.
- Displays elapsed time in `HH:MM:SS.cc` format.
- Preserves elapsed time when stopped and resumed.
- Prevents multiple intervals from running simultaneously.
- Measures elapsed time using timestamps.

## Technologies

- **HTML** — Clock display, stopwatch display, and control buttons.
- **CSS** — Layout, colors, typography, and styling.
- **JavaScript** — Time calculations, event handling, display updates, and timer management.

## How to Run

1. Clone or download the repository.
2. Open the project folder in VS Code.
3. Open `index.html` in your browser, or use the Live Server extension.
4. Observe the digital clock and use the stopwatch controls.

## Concepts Learned

- Creating and using `Date` objects.
- Reading time with `getHours()`, `getMinutes()`, and `getSeconds()`.
- Measuring elapsed time with `Date.now()`.
- Repeated execution using `setInterval()`.
- Stopping intervals using `clearInterval()`.
- Formatting strings using `String()` and `padStart()`.
- Template literals and string interpolation.
- DOM selection and updating `textContent`.
- Handling button clicks with `addEventListener()`.
- Managing application state using variables.
- Preventing duplicate timers and preserving elapsed time.

## Testing

Verified the following behaviors:

- Start and Stop.
- Resume from previously accumulated elapsed time.
- Reset to zero.
- Repeated Start without duplicate intervals.
- Digital clock continues updating independently.