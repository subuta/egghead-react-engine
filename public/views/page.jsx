var React = require('react');

var Page = React.createClass({
  render:function(){
    return (
        <html>
          <head>
            <title>{this.props.title}</title>
            <script src="/vendor/console-polyfill.js"></script>
            <script src="/vendor/es5-shim.min.js"></script>
            <script src="/vendor/es5-sham.min.js"></script>
            <script src="/vendor/html5shiv.js"></script>
            <script src="/vendor/ie8.max.js"></script>
            <script src="/vendor/json2.min.js"></script>
            <script src="/vendor/json3.min.js"></script>
          </head>
          <body>
            {this.props.children}
            <script src="/bundle.js"></script>
          </body>
        </html>
      )
  }
});

module.exports = Page;
