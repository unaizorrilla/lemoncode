# Setup

Open the code using the **Reopen in Container** feature from *Dev Containers extension* in **VS Code**

# Install dependencies

To install dependencies execute the following command:

```bash
npm install
```

# Run

To run the project execute the following command and follow the link ```http://localhost:XXXX``` from the **VS Code Dev Containers** terminal or **Open in browser toast**.

```bash
npm run dev
```

![Open In Browser](../assets/open-in-browser.png)

# Change default theme

In order to change the default theme, open *mystyle.scss* file and modify as we do bellow:

```diff
-@import url('./main-theme.css');
+@import url('./secondary-theme.css');
```