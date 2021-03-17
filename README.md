# WAVE MAPS
-------------------------------------------------------------------


![](wavemaps.gif)


-------------------------------------------------------------------

## Technologies
***
* React.js
* Node.js
* Express.js
* React Bootstrap

-------------------------------------------------------------------

## Endpoints 

Base Url => `heroku/api`

|       Route        | HTTP Verb |          Description          |
|--------------------|-----------|-------------------------------|
| `/signup` |    POST    | Register in the database and redirect to the profile|
| `/login` |    POST    | Go to the user profile|
| `/loggedIn` |    GET    | Keep the session logged in|
| `/logout` |    POST    | Log out and redirect to home page |
| `/profile` |    GET    | Go to the user profile|
| `/profile/edit/:id` |    PUT    | Edit the user profile|
| `/profile/delete/:id` |    POST    | Unsubscribe user account|
| `/wave` |    GET    | Show places with waves in list or on map |
| `/wave/details/:wave_id` |    GET    | Show wave details |
| `/wave/new` |    POST    | Create wave in DB and redirect to waves component |
| `/wave/edit/:wave_id` |    PUT    | Edit the wave |
| `/wave/delete/:wave_id` |    POST    | Delete the wave|


-------------------------------------------------------------------


## Models

 ### `User` :
- `username` - String
- `password` - String
- `description` - String
- `avatar` - String
- `role` - String

### `Wave`:
- `title` - String
- `description` - String
- `image` - String
- `location` - String
- `type` - String
- `seaBed` - String
- `swellDirections` - String
- `windDirections` - String
- `swellRange` - String
- `swellConsistency` - String
- `crowd` - String
- `quality` - Number
- `createdBy` - mongoose.Schema.Types.ObjectId

### `Comment`:
- `writtenBy` - mongoose.Schema.Types.ObjectId
- `wave` - mongoose.Schema.Types.ObjectId
- `description` - String
- `title` - String

-------------------------------------------------------------------

## Authors

* Carlos Prado - [Github Page](https://github.com/ceprado93/)
* Eva Vírseda - [Github Page](https://github.com/evavirseda)
