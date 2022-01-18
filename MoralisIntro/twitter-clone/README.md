# MoralisIntro

03.Jan.22

---

The video series is the introduction and setup of Moralis and React, and goes through how to set up the React website, interacting through Moralis.

"React & Moralis - Introduction And Setup, Authentication, Sign Up and Login, Save User Data" - https://www.youtube.com/playlist?list=PLFPZ8ai7J-iSbOoPePI9c_XCeZQLpOO2z

Author: "Moralis Web3"

---

Purpose:

    This is so that I can learn how to use the Moralis development platform to quickly make decentralised apps.

    I will also remind myself on how React.js works for frontend applications.

    Moralis is middleware software that apps can be built upon, allowing easier interaction with blockchains.

    We will be making a simple twitter application.

    1. Authentication
    2. Save user data
    3. File handling
    4. Post data/tweets
    5. Query data/tweets
    6. Cloud functions
    7. Automatic refetch data
    8. Live data (subscriptions)

    Not going over smart contracts.

    Making a simple twitter.
    How to handle data to/from Moralis.

    ::: NB the course stopped after 3 videos, so this was only for user data and setup of environment, authentication, error handling etc :::

---

Steps taken while doing:

    1. `npx create-react-app twitter-clone`
        Remove default yarn.lock file, and run `npm install` inside the `twitter-clone` directory.
        Run `npm run start` (or npm start) (in package.json you can see different scripts you can run).
        Delete basic styling App.css, index.css, and the logo (and any imports to these files), the entire <header> block in App.js, and app test file.

        This is bare minimum React app.


    2.  Use `chakra-ui library for some styling so not so white.
        `npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5`
        Similar to bootstrap but more flexible.

        Must set up the provider, which is one component that will wrap the entire application (in index.js).
        Add import, and setup custom theme.


    3.  `npm install moralis react-moralis` (two separate installs here!)

        Moralis is the basic JS framework that will give access to all different Moralis functionalities that we want.

        React Moralis is a provider for the React application that will make all interactions with Moralis easy. Custom hooks, authentication, data rendering. (documentation: github.com/MoralisWeb3/react-moralis)

        As with Chakra provider we need Moralis provider.


    Authentication, sign up, logging in

    4.  Either use Metamask and Web3 to log in with a crypto address, or sign up with username/pwd.

        Firstly Metamask.
        Will be using the useMoralis() hook from react-moralis. This grabs functions named in the {}.

        When we authenticate with Moralis, it provides a session cookie that remains between refreshes.

        For error message we use the Alert component from Chakra, and the authError component from Moralis.

    4b. Pwd/email

        There are very similar SignUp and LogIn components added, using imported signup/login functions.


    5.  Cleaning up. Create Auth.js.


    6.  Import `user` data from useMoralis().
        For greeting,

    7.  `npm install react-router react-router-dom`
        Add a Router / BrowserRouter provider, wrapping the App in index.js

        With this we can switch between Routes based on url.

        When checking if Authenticated, it takes a few miliseconds for Moralis to check so we get undefined behaviour.
        Add isAuthUndefined variable, which will be true in first few miliseconds of the application.

    8.  Add functionality of profile page to save changes to Moralis user data.

---

Debugging:

    Must use `px create-react-app --scripts-version 4.0.3 twitter-clone-3` when creating project.

    Must use v4 for chakra: `npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4`.

    7. 'Switch' not exported from 'react-router-dom'. Switch is replaced in react-router-domv6, so run `npm install react-router-dom@5`.
    Supposedly you can also use
