# simple-social
Let's get as vain as possible - username, followers, and nothing else

## Developement quick start
* Install dependencies `npm install`
* In three seperate terminal tabs (each command does not terminate)
  * Start up a local mongo instance `mongod`
  * Build and watch the front-end for changes `npm run front-end`
  * Start up back-end `npm run back-end`
* Access `localhost:7777` in browser

The back-end server will restart anytime changes are made to files outside of front-end (`app/public`). The front-end is re-transpiled anytime changes are made to the front-end.

## Features
* Back end
	* Get users
	* Create users
	* bcrypt passwords
	* Users can follow other users
	* Delete users

* Front end
	* List all users and followers
	* Add and delete users

## To Do

* Add follow functionality to front end (coming with React rewrite)
* Elastic user searching
