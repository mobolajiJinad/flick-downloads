# Movie Recommendation Engine

This is a recommendation engine that suggests movies based on a user's preferences and viewing history.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.

## Usage

1.  Start the server using `npm start`.

    Base URL = `127.0.0.1:3000/api/v1`

## Authentication

To access the API endpoints, except `/auth` paths, you must include a bearer token in the authorization header of your requests. The bearer token is obtained by authenticating with the API using your credentials.

To include the bearer token in your requests, add an Authorization header with the value Bearer <your_token>, where <your_token> is the token you obtained during authentication.

Here's an example using cURL:

```
curl -H "Authorization: Bearer <your_token>"
http://{{BaseURL}}/user/recommended
```

<br>

Make sure to replace <your_token> with the actual token value you obtained during authentication.

## Responses

### - 400 Bad Request

```
{
  "msg": "string"
}
```

### - 401 Unauthorized

```
{
  "msg": "string"
}
```

### - 500 Internal Server Error

```
{
  "msg": "string"
}
```

  <br>

## End points

### -POST `/user/signup` - To create an account for user.

### [Check example here](./markdowns-files/auth.md#signup-examples)

<br>

### -POST `/user/login` - To log in a user

### [Check example here](./markdowns-files/auth.md#login-examples)

<br>

### -POST `/user/preferences/add-genres` - To add genres preferred by the user

### [Check example here](./markdowns-files/preferences.md#add-genres)

<br>

### -POST `/user/preferences/add-actors` - To add actors preferred by the user

### [Check example here](./markdowns-files/preferences.md#add-actors)

<br>

### -POST `/user/preferences/add-movies` - To add movies preferred by the user

### [Check example here](./markdowns-files/preferences.md#add-movies)

<br>

### -GET `/user/preferences` - To get all user's preferences saved

### [Check example here](./markdowns-files/preferences.md#get-preferences)

<br>

### -POST `/user/viewing-history/add` - To add movies user has watched

### [Check example here](./markdowns-files/viewing-history.md#add)

<br>

### -GET `/user/movie/:movieID/rating?rate=<ratings>` - To rate movies user has watched

### [Check example here](./markdowns-files/viewing-history.md#rate)

<br>

### -GET `/user/viewing-history` - To get all movies viewer has watched

### [Check example here](./markdowns-files/viewing-history.md#get-all)

<br>

### -POST `/user/search/actor` - To search for an actor

### [Check example here](./markdowns-files/search.md#actor)

<br>

### -POST `/user/search/movie` - To search for an actor

### [Check example here](./markdowns-files/search.md#movie)

<br>

### -GET `/user/recommended` - To get movie recommendations

### [Check example here](./markdowns-files/recommend.md)

<br>

## Contributing

Contributions are welcome! Please submit a pull request or create an issue if you encounter any bugs or have any suggestions for new features.

## Credits

This project was created by Abd'Quadri (mobolajiJinad).

## License

This project is licensed under the MIT License. See LICENSE for more information.
# Flick Downloads

An web app for checking out details of movies and discovering new ones.
