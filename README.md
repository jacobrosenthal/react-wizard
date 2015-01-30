react-wizard
------------
Wizard is a typical wizard element for installs, mulitpart forms, etc. It takes a steps prop with an array of Step objects, start prop with optional integer to skip into the step array, and any othr props you will need later on in Step methods as a data prop. 

install
-------
```
npm install react-wizard
```

steps
-----
Steps consist of:
* name - name of step shown to user as list element
* component - react CreatClass function of your content. 
* onSubmit - your 'validate' function. If it returns an error the step is not advanced and that error will be shown to user. Successful callback advances to next step.
* onBack - a function to called before leaving step. Used to cleanup.

demos
-----
* [Simple Demo](https://jacobrosenthal.github.io/react-wizard/examples/simple/index.html)
* [Passing Data Demo](https://jacobrosenthal.github.io/react-wizard/examples/data/index.html)
* [Skipping Step Demo](https://jacobrosenthal.github.io/react-wizard/examples/skip/index.html)

examples
--------
There are pure js examples in the examples directory and node-http-server is a dev dependency
```
npm i && gulp examples
```
Then pick an example directory and port
```
node node_modules/node-http-server/server/http.js root=examples/data/ port=9999 launch=now

```
Then load your browser up at http://localhost:9999 in this case

note:
-----
Back button is automatically disabled on first step.
The built in buttons are removed from the last step so remember to provide buttons/links on your last step for your user to escape.

Big thanks to @brianshaler for the code review that turned into an entire rewrite
