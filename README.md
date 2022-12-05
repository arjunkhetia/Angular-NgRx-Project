# Angular NgRx Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## NgRx

NgRx is an open source library that provides reactive state management for our Angular applications. Inspired by Redux, NgRx provides a way to maintain data in our Angular application as a single source of truth. NgRx uses streams to interact with a data store. This data store connects to our components and services, and ultimately simplifies the entire process of data management in our Angular application. Instead of injecting services everywhere and managing communication between them, NgRx manages our application from one singular source. Using NgRx, we work with our application in terms of its overall state, instead of individual components.

### NgRx implementation:

![NgRx](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/ngrx.png "NgRx")

**Store** - A store is a central repository where we store our data. We can think of this as a client-side database. The Store in NgRx acts as the application's single source of truth. It reflects the current state of the app.

**Actions** - Actions express unique events that happen in our application. These events range from application lifecycle events, user interactions, to network requests. Actions are how the application communicates with NgRx to tell it what to do.

**Reducers** - Reducers are responsible for handling transitions between states. Reducers react to the Actions dispatched and executes a pure function to update the Store. Pure functions are functions that are predictable and have no side effects. Given the same set of inputs, a pure function will always return the same set of outputs.

**Selectors** - Selectors are pure functions for getting slices of the state from the Store. Selectors are how our application can listen to state changes.

![01](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/01.png "01")

**Effects** - Effects handle the side effects of each Action. These side effects range from communicating with an external API via HTTP when a certain Action is dispatched to dispatching another Action to update another part of the State.

**Entities** - Entity is a small library that helps us to keep our entities in this ideal Entity state format (array of ids plus map of entities).

![02](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/02.png "02")

### NgRx project screen

![1](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/1.png "1")

### Data in store screen

![2](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/2.png "2")

### NgRx DevTools Screen

![3](https://github.com/arjunkhetia/Angular-NgRx-Project/blob/main/src/assets/3.png "3")