# Bundling 03

This contains all the files to complete the **Exercises** and **Optionals** from this module

## Web Pack

### Mandatory

Implement a simple application that:

- Has bundling set up with Webpack.

- Displays a logo (for example, the Lemoncode logo or any other you prefer).

- Displays the text “hello world” styled with SASS.

Review the [Readme](./webpack-mandatory/Readme.md) to see the instructions to build and run 

### Optional

This part is optional, in case you want to keep practicing. You can find the steps on how to do it here: Webpack repository.

Display a “hello world” developed with React.

- Add TypeScript.

- Have a production build version.

- Have environment variables for different environments (development and production).

- Have a way to measure how much each library and our code take up in the bundle.


Review the [Readme](./webpack-optional/Readme.md) to see the instructions to build and run 

## Vite

### Mandatory
Set up a project seed with Vite that:

-  Is configured with TypeScript and allows type errors to be detected in the terminal if there are any.

- Allows you to see the bundle size.

- Includes the start script to launch the development server and a preview script to serve the production bundle.

- Has environment variables. You can use a string that is displayed with a console.log, where in development (when running locally with npm start) it has one value, and when building and viewing with npm run preview, it has a different value.

- Creates an H1 element with text using the DOM API, and that H1 is styled using CSS Modules.

### Optional

Add to the Vite project seed the necessary configuration so that, upon building, it also generates compressed files (GZIP and BROTLI). As a result, after running the build, the files dist/index.js.gz and dist/index.js.br should exist.
