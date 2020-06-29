# HACKER NEWS

-   Table of content
    -   [Run Application:](#run-application-)
    -   [Contribution Guide](#contribution-guide)
        -   [Unit test](#unit-test)
        -   [Linting](#linting)
    -   [Overall Technical tools](#overall-technical-tools)
    -   [Application requirement gathering process](#application-requirement-gathering-process)

## Run Application:

This application use Webpack

```bash
// Install
> yarn

// Local Build and Start
> yarn dev

// Production Build
> yarn build:prod

// Start in server
> yarn start
```

Open in browser: http://localhost:3000

## Contribution Guide

### Unit test

```bash
 yarn test
```

### Linting

```bash
 yarn lint
```

## Overall Technical tools

-   SSR (Server side rendering )
    -   ReactDom/server and hydrate
    -   Express server
-   GreaphQL
    -   The intention of using this is to create a gateway and reduce the response size according to the data we required.
    -   This is not for a proxy and not to avoid CORS.
-   React
-   React router dom and React router config
-   Redux and ReduxSaga
    -   Redux data normalization
    -   Reselect for a memorized selector
-   Jest and React testing lib
-   Eslint and prettier
-   Webpack
    -   Client and Server config
-   Code split suing @component/loader
-   SCSS
-   Chart.js for chart
-   local storage for storing the UpVote and hide
-   Axios both client and server
-   Service worker and manifest for PWA
-   GITAction for CI
-   Heroku for automated deploy when merge to master.

## Application requirement gathering process

Before starting the project I took a moment to gather all the requirements and created Stories. This includes technical details, Acceptance Criteria, and Story Point and time to complete.

To make the reference easy, the branch name is also the same as the story.

e.g **Story Name:** STORY-1 |
**Branch:** story-1

Please find all the work separation while building the application

-   [STORY 1](stories/STORY-1.md)
-   [STORY 2](stories/STORY-2.md)
-   [STORY 3](stories/STORY-3.md)
-   [STORY 4](stories/STORY-4.md)
-   [STORY 5](stories/STORY-5.md)
