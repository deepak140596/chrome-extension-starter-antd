# How to setup
1. Install Node.js
2. Install npm
3. Goto root folder. run command `npm install --legacy-peer-deps`
4. run command `npm run dev`

# How to install extension and develop
1. Goto manage extensions in browser
2. Enable developer mode
3. Click on load unpacked
4. Select the dist folder in the root directory
5. Click on the extension icon in the browser to use the extension

# How to use Oasis library
Have all the design system typography and colors implemented.

To use this :
Step 1 : Import the app.scss in the required scss file.
Step 2: For using the typography use : @include h1-regular($color : $white)

The required files can be found under library folder.

Auto-suggestion will work for the colors name and also mixins name.

MIXINS INCLUDED:

All mixins for typography.
One mixins each for row-flex and column-flex.

# How to use local storage
Add the key-value in the StorageKeys enum in src/api/storage/keys.ts

## Get/set
`const storedNumber = useChromeStorageLocalGet<MyCustomDataModel>(StorageKeys.MY_KEY, MyCustomDataModel());`
`const setStoredNumber = useChromeStorageLocalSet<MyCustomDataModel>(StorageKeys.MY_KEY);`

## Listen to live changes
`const storedData = useChromeStorageLiveUpdate(StorageKeys.MY_KEY);`