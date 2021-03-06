## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test` or `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## How to use

```jsx
const Loader = () => (
  <SvgLoader height={70} width={350}>
    <circle cx="20" cy="37" r="20"/>
    <rect x="60" y="0" width="40" height="15" rx="8" ry="8"/>
    <rect x="60" y="25" width="140" height="20" rx="8" ry="8"/>
    <rect x="60" y="55" width="100" height="15" rx="8" ry="8"/>
    <rect x="220" y="0" width="130" height="70" rx="8" ry="8"/>
   </SvgLoader>
)
```

## Options

#### **`width: number`**

This option set the width of svg element.

#### **`height: number`**

This option set the height of svg element.

#### **`direction?: string`**

Defaults to `vertical`. If you want to change direction you should use `horizontal`

#### **`reverse?: boolean`**

Defaults to `false`. If you want to change reverse you should use `true`

#### **`backColor?: string`**

Defaults to `#101080`. This option set the background text-loader.

#### **`loaderColor?: string`**

Defaults to `#347dcc`. This option set the color of loader.

#### **`className? string`**

This option set className of svg element.
