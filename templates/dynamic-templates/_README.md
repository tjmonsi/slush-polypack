<%= appName %>
[![Stories in Ready](https://badge.waffle.io/<%= appRepo %>.svg?label=ready&title=Ready)](http://waffle.io/<%= appRepo %>)
[![Stories In Progress](https://badge.waffle.io/<%= appRepo %>.svg?label=in%20progress&title=In%20Progress)](http://waffle.io/<%= appRepo %>)
[![Build Status](https://travis-ci.org/<%= appRepo %>.svg?branch=master)](https://travis-ci.org/<%= appRepo %>)

> <%= appDescription %>

## Getting Started

Install dependencies and firebase-tools:

```bash
$ npm install
$ npm install -g firebase-tools
```

Once firebase-tools is installed, login to your firebase account.

```bash
$ firebase login
```

And you're done. Next...

### Running the Application

To run the app.

```bash
$  npm start
```

Be sure to have the right credentials and you own the firebase project or it will return some errors.

If you want to run using your own http server, just run...

```bash
$ npm start -- --no-server
```

If you want to build the project without watching...

```bash
$ npm run build
```

If you want to build the project for production...

```bash
$ npm run build-production
```

## Contributing

See the [CONTRIBUTING Guidelines](https://github.com/<%= appRepo %>/blob/master/CONTRIBUTING.md)

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/<%= appRepo %>/issues).
