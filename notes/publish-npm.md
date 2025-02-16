1. Set the NPM_TOKEN environment variable: You can set the NPM_TOKEN environment variable in your terminal session. Replace your-npm-token with your actual npm token.
```
export NPM_TOKEN=your-npm-token
```

2. Create or update your .npmrc file: Create or update the .npmrc file in your project directory to use the NPM_TOKEN for authentication. Add the following line to your .npmrc file:
```
//registry.npmjs.org/:_authToken=${NPM_TOKEN}
```

3. Publish the package: Run the following command to publish your package to npm:
```
npm publish --access public
```

Here is a step-by-step example:

- Set the NPM_TOKEN environment variable:
```
export NPM_TOKEN=your-npm-token
```

- Create or update the .npmrc file:
```
echo '//registry.npmjs.org/:_authToken=${NPM_TOKEN}' > .npmrc
```

- Publish the package:
```
npm publish --access public
```