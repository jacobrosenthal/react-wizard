#react-wizard
Wizard is a typical wizard element for installs, mulitpart forms, etc. It takes a steps prop with an array of Step objects, start prop with optional integer to skip into the step array, and any othr props you will need later on in Step methods as a data prop. 

#install
```
npm install react-wizard
```
#steps
Steps consist of:
* name - name of step shown to user as list element
* component - react CreatClass function of your content. 
* onSubmit - your 'validate' function. If it returns an error the step is not advanced and that error will be shown to user. Successful callback advances to next step.
* onBack - a function to called before leaving step. Used to cleanup.

##example step
```js
//ChromeApp.jsx
var React = require('react');

module.exports = {
  name: 'Chrome App',
  onSubmit: function (done){
    chrome.webstore.install(this.props.data.url, done, function(err){
      done(new Error('Installation Failed :( ' + err));
    });
  },
  component: React.createClass({
    render: function(){
      return <h4>First things first, We need the chrome app to talk to your usb devices. Click Go, and lets Go!</h4>
    }
  })
};
```

#use
```js
var Dash = require('react-wizard');
var Steps = [
  require('./Steps/ChromeApp.jsx'),
  require('./Steps/UnPack.jsx'),
  require('./Steps/PlugIn.jsx'),
  require('./Steps/Program.jsx'),
  require('./Steps/Configure.jsx'),
  require('./Steps/Done.jsx')
];
var url = 'https://chrome.google.com/webstore/detail/gjnfhdmcgnaiogffpdoiecllabiabdee';
React.render(React.createElement(Dash, {url: url}), document.getElementById('container'));
```
##note:
Back button is automatically disabled on first step.
The built in buttons are removed from the last step so remember to provide buttons/links on your last step for your user to escape.

Big thanks to @brianshaler for the code review that turned into an entire rewrite
