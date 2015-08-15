# Testing Example

First, clone this project using the git command line to a folder of your choosing:

```
git clone git@github.com:NickGlenn/TestingExample.git ./testing-example
```

Then, you'll need to run `npm install` to install the dependencies for the project.  These dependencies are the test runner, [Mocha](http://mochajs.org), and the assertion library, [Chai](http://chaijs.com).

```
sudo npm install
```

You can then install the Mocha CLI tool using the following command...

```
sudo npm install -g mocha
```

And finally, run the test(s)!

```
mocha
```

If you're doing TDD, you can add the `--watch` flag to have the test update automatically when changes are detected.

```
mocha --watch
```

-------

Alternatively, you can skip the global installation of Mocha and just run using the `npm test` command for this project.

```
npm test
```
