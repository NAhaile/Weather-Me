# Useful Weather Application!!

## Starting Information

### Developer Information

*Please fill in this information before submission*

* **Developer Name(s): Natnael Haile** 
* **Heroku Deployment URL:**  (Not Yet Created as of 7/2/22)

### Documentation of our Web App and React Components

**General App Description:** This web application provides information about the weather on your local device as well as a fun creative spin by giving you the current season you are in! and other related/useful information.

* **React Component 1:** Retrieve a city from our Washington DC Database
  * *Functionality:* Displays a list of cities and allows the user to sort the cities alphabetically
  * *Interactivity:* The user can click on an arrow at the top of the list to change the sorting.

## Project Overview

This repo contains a barebones React app with a single component. You will use this as the "base" version of your Interactive Front-end application for HW Assignment #4. You will simply create a copy of this repo through GitHub classroom and then work in that repo. 

## Homework Assignment 3 Detailed Instructions

You can find the deatiled instructions for HW Assignment #4 on the [course webpage](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f21/hw4). Please read these carefully before getting started.

## Running this Project Locally

Make sure you have [Node.js](http://nodejs.org/) and (optionally) the [Heroku CLI](https://cli.heroku.com/) installed. You only need the Heroku CLI installed if you plan to deploy the project from the CLI instead of the Heroku web interface. See the [HW Assignment #4 instructions](https://cs.gmu.edu/~kpmoran/teaching/swe-432-f21/hw4) for more details.

*Note the following commands assume a Unix-based enviornment. If you are on windows, you may need to use something such as Windows Subsystem for Linux (https://docs.microsoft.com/en-us/windows/wsl/about).*

```sh
$ git clone <repo-name>
$ cd <repo-name>
$ npm install
$ npm start
```

After executing these commands, your express backend and React frontend should now be running on [localhost:5000](http://localhost:5000/). 

## Testing with Continuous Integration

**Note that you are not required to test your project with Jest for HW3, however, we have enabled this functionality in case you would like to use it. If you would like to remove the tests, you can remove the `.github` directory from the repo.**

Currently, this repo is set up to run the Jest tests in the `App.test.js` file upon each commit to the `main` branch of the repository. If any of the tests fail, the CI process will fail and this will be indicated with red "X" on the main page of your repo, and GitHub will likely also send you a notification email that your automated tests have failed.

Currently, the tests are configured to run by getting deployed to a remote virtual server with an Ubuntu operating system, where the `npm install` and `npm test` commands are executed.

Note that we have included the [`jest-dom`](https://testing-library.com/docs/ecosystem-jest-dom/) library for your tests. This allows you to check DOM elements in your tests.

You can find the [GitHub Actions](https://github.com/features/actions) script for this CI job [here](.github/workflows/ci.yml) if you want to learn more.

## Additional Resources

For more information about using Node.js on Heroku, see these Heroku Dev Center articles:

- [React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [Express Documentation](https://expressjs.com/en/5x/api.html)
- [Supertest Documentation](https://www.npmjs.com/package/supertest)
- [Getting Started on Heroku with Node.js](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
