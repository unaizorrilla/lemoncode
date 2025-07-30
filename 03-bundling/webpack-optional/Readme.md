# Bundling 03 - WebPack Optional

This part is optional, in case you want to keep practicing. 

Display a “hello world” developed with React.

- Add TypeScript.

- Have a production build version.

- Have environment variables for different environments (development and production).

- Have a way to measure how much each library and our code take up in the bundle.

# Setup

Open the code using the **Reopen in Container** feature from *Dev Containers extension* in **VS Code**

# Install dependencies

To install dependencies execute the following command:

```bash
npm install
```

# Run 

To run the Webpack optional exercise please follow the command:

```bash
npm run start
```

And open the url from the output `http://localhost:8888`

```bash
<i> [webpack-dev-server] Project is running at:
<i> [webpack-dev-server] Loopback: http://localhost:8080/, http://[::1]:8080/
<i> [webpack-dev-server] On Your Network (IPv4): http://172.17.0.2:8080/
<i> [webpack-dev-server] Content not from webpack is served from '/workspaces/lemoncode/03-bundling/webpack-mandatory/public' directory
asset bundle.js 193 KiB [emitted] (name: main)
```

# Run Bundle Analyzer

To run the Webpack optional exercise please follow the command:

```bash
npm run build:dev
```

And open the url from the output `http://localhost:8888`


> Bundle analyzer is only on development mode