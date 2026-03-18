# AngularTutorial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.2.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.







# Angular Property Binding

## Overview

Property Binding in Angular allows you to bind values from the component (TypeScript) to the HTML template dynamically. It is a **one-way data binding** from the component to the view.

---

## What is Property Binding?

Property Binding is used to set values of HTML element properties dynamically using Angular expressions.

### Syntax:

```
[property]="expression"
```

Example:

```
<input [value]="username" />
```

---

## Why Use Property Binding?

* Keeps UI synchronized with component data
* Enables dynamic updates
* Improves maintainability
* Avoids direct DOM manipulation

---

## Types of Property Binding

### 1. Element Property Binding

```
<img [src]="imageUrl" />
<button [disabled]="isDisabled">Click</button>
```

### 2. Class Binding

```
<p [class.error]="hasError">Error Message</p>
```

### 3. Style Binding

```
<p [style.color]="isError ? 'red' : 'green'">
```

---

## Property Binding vs Attribute Binding

| Property Binding          | Attribute Binding          |
| ------------------------- | -------------------------- |
| Works with DOM properties | Works with HTML attributes |
| Dynamic updates           | Static or rarely updated   |
| Example: `[value]`        | Example: `value="text"`    |

---

## Property Binding with Signals (Angular 16+)

Signals provide reactive state management.

Example:

```
username = signal('Sandeep');
```

Usage:

```
<input [value]="username()" />
```

---

## Do’s and Don’ts

### Do:

* Use property binding for dynamic values
* Keep logic inside the component
* Use class/style binding for UI control

### Don’t:

* Don’t mix attribute and property binding incorrectly
* Avoid heavy logic inside templates
* Don’t manipulate DOM directly

---

## Common Interview Questions

1. What is property binding in Angular?
2. Difference between property binding and interpolation?
3. Difference between attribute and property binding?
4. How does Angular handle DOM updates?
5. What is the role of signals in binding?

---

## Conclusion

Property Binding is a core Angular concept that enables dynamic UI updates and clean separation between logic and presentation.

---
