# A counter app 
This project was created as a task for learning path in Web Development.\

## Features Include
* adding
* sustracting
* reseting



## Getting Started

To run the project in local enviroment, you can follow these steps:

1. Clone the repository to your local machine:
```bash
git clone https://github.com/Eliguus/2023-project-phase-web-tasks.git
```
2. Go into ToDo directory
```bash
cd on-boarding/task-6/counter
```
3. Install dependencies using npm
```bash
npm install
```
4. Start development server
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

* The page will reload if you make edits.
* You will also see any lint errors in the console.


## Takeaways
* The useRef hook allows you to create a mutable ref object that can hold a value and persists across re-renders.
* The useEffect hook is used to perform side effects in response to changes in dependencies. In this case, it updates the countRef and the document title whenever the count changes.
* Refs can be used to access and manipulate DOM elements directly. In this code, increaseButton and decreaseButton refs are used to change the background colors of the buttons.
* The useState hook is used to define and initialize the count state variable.