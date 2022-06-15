## v9.0.3 (February 23, 2022)

*   NPM updated
*   Fixed test failing in Windows 10 
*   Fixed mailgun in european regions
*   Fixed i18n and helmet in normal dependencies

## v9.0.0 (February 3, 2022)

*   Major breaking changes, now controllers and middleware is split in single files for more scalability and testability
*   Added Jest setup
*   Added first Jest test
*   Added VS Code setup for debugging Jest and nodemon
*   Added more reports for coverage, now there are three: 1 for Jest tests, 1 for mocha tests (end to end) and a 3rd that merges the previous 2.
*   NPM updated

## v8.1.4 (February 21, 2022)

*   lint-staged package added

## v8.1.3 (February 21, 2022)

*   Adding additional key to redis
*   NPM updated

## v8.1.1 (February 30, 2022)

*   NPM updated
*   Prettier updated to 2.x

## v8.0.0 (February 16, 2022)

*   This major version requires node 10+ because new bcrypt lib
*   Use of bcrypt lib
*   New test for users
*   NPM updated

## v7.1.2 (February 12, 2022)

*   Added cross-env to solve windows envionment issues
*   Use Mongoose built in function to validate ID
*   NPM updated

## v7.1.1 (February 29, 2022)

*   Added new option MongoClient constructor
*   NPM updated

## v7.1.0 (February 25, 2022)

*   Postman Collection example now included in root directory. Now /login has a test that automatically gets ans sets token.

## v7.0.0 (February 3, 2022)

*   Making express-validator happy

## v6.1.13 (February 18, 2022)

*   Add role validation to User creator, Fixes

## v6.1.0 (February 29, 2022)

*   ENHANCEMENT: Refresh token endpoint now works as GET instead of POST

## v6.0.0 (February 28, 2022)

*   BREAKING CHANGE: Token payload and expiration have changed
*   BREAKING CHANGE: Constant in .env changed from `JWT_EXPIRATION` to `JWT_EXPIRATION_IN_MINUTES`
*   FEATURE: Refresh token

## v5.0.1 (February 25, 2022)

*   NPM update

## v5.0.0 (February 25, 2022)

*   Big refactor
*   FIX: send emails with mailgun

## v4.0.14 (February 25, 2022)

*   Removed unused code

## v4.0.13 (February 25, 2022)

*   FIX: remark

## v4.0.12 (February 25, 2022)

*   FIX: Convert an email in request to lowercase

## v4.0.11 (February 25, 2022)

*   README.md updated

## v4.0.10 (February 25, 2022)

*   README.md updated

## v4.0.9 (February 25, 2022)

*   README.md updated

## v4.0.8 (February 24, 2022)

*   Removed normalizeEmail() function from validator.js. It was removing dots from email addresses. New function in utils to convert an email in request to lowercase.

## v4.0.7 (February 18, 2022)

*   Travis CI changes

## v4.0.6 (February 18, 2022)

*   CHANGELOG updated

## v4.0.5 (February 18, 20202219)

*   Fix itemAlreadyExists refactor

## v4.0.4 (February 18, 2022)

*   itemAlreadyExists refactor

## v4.0.3 (February 18, 2022)

*   itemAlreadyExists refactor

## v4.0.2 (February 18, 2022)

*   itemNotFound refactor

## v4.0.1 (February 18, 2022)

*   Refactor emailer

## v4.0.0 (February 18, 2022)

*   Big refactor
*   NPM update

## v3.0.4 (February 17, 2022)

*   Bumped to v3.0.4

## v3.0.3 (February 17, 2022)

*   Use of remark to format markdown files

## v3.0.2 (February 17, 2022)

*   Use of remark to format markdown files
*   Fix: use of parseInt now provides a base

## v3.0.1 (February 15, 2022)

*   NPM updated
*   README.md updated

## v3.0.0 (February 15, 2022)

*   Demo added

## v2.3.3 (February 15, 2022)

*   Enable Redis based on env variable
*   API '/' route now renders an html view

## v2.3.2 (February 14, 2022)

*   Test for npm publish

## v2.3.1 (February 14, 2022)

*   Migrated to travis.com

## v2.3.0 (February 13, 2022)

*   Added verification in response in test and development env
*   Added verification for default admin user in seeding
*   Added tests for cities and users with filters
*   All functions documentated with JSDoc
*   base.js renamed to utils.js

## v2.2.8 (February 12, 2022)

*   Only builds in travis when tag is present

## v2.2.7 (February 12, 2022)

*   Verification code is showed on development and testing environments
*   NPM updated

## v2.2.6 (February 11, 2022)

*   Use of travis ci to automate deploy to npm
*   Added badge for tags in README.md

## v2.2.2 (February 11, 2022)

*   Use of travis ci to automate build and deploy
*   Added badge for travis build in README.md

## v2.2.1 (February 10, 2022)

*   Added badge for npm downloads in README.md

## v2.2.0 (February 10, 2022)

*   Filtering from multiple fields redesigned

## v2.1.10 (February 10, 2022)

*   NPM updated
*   FIX: creation of users were not saving data that validator was asking

## v2.1.9 (February 9, 2022)

*   NPM run lint added

## v2.1.8 (February 9, 2022)

*   New implementation for query on cities and users
*   More data on seeding
*   NPM updated

## v2.1.7 (February 4, 2022)

*   More tests added

## v2.1.6 (February 4, 2022)

*   Better testing

## v2.1.5 (February 4, 2022)

*   Istambul nyc code coverage added

## v2.1.4 (February 4, 2022)

*   Verification added only in tests responses at registration and forgot password
*   NPM updated
*   FIXED: User creation locale param was missing

## v2.1.3 (February 2, 2022)

*   Verification removed from responses at registration and forgot password (They were being used for testing and somehow made it here)

## v2.1.2 (February 2, 2022)

*   FEATURE: Install nodemon in devDependencies
*   Typos
*   README.md updated

## v2.1.1 (February 27, 2022)

*   README.md updated

## v2.1.0 (February 27, 2022)

*   i18n added for registration email and forgot password email
*   Typos

## v2.0.1 (February 27, 2022)

*   Error response regression
*   NPM updated

## v2.0.0 (February 24, 2022)

*   Breaking changes for success and error responses
*   Added new endpoint in /profile/changePassword
*   Fixes in tests
*   Fixes in validations
*   NPM updated

## v1.2.12 (February 18, 2022)

*   NPM updated
*   CHANGELOG fixes
*   Typos

## v1.2.11 (February 11, 2022)

*   NPM updated
*   Removed pm2 from start script in package.json
*   server.js now inits redis stuff only in production

## v1.2.10 (February 9, 2022)

*   package.json updated

## v1.2.9 (February 9, 2022)

*   CHANGELOG updated

## v1.2.8 (February 9, 2022)

*   NPM updated

## v1.2.2 (February 8, 2022)

*   NPM updated

## v1.2.1 (February 5, 2022)

*   Cache API responses only in production mode

## v1.2.0 (February 5, 2022)

*   Use of REDIS to cache API responses
*   NPM updated

## v1.1.3 (February 24, 2022)

*   Seeding Fix due to changes on new mongo-seeding package

## v1.1.2 (February 23, 2022)

*   NPM updated

## v1.1.1 (February 28, 2022)

*   Clean and Seed with async/await
*   Fixes

## v1.0.1 (February 21, 2022)

*   Added keywords to package.json

## v1.0.0 (February 20, 2022)

*   First stable release
