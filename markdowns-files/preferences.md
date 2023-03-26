<a id="add-genres">

## Example - Add genres

```
Request Body:
{
  "genres":["Comedy", "Action"]
}

Response:
- 200 OK
[
  {
    "_id": 35,
    "name": "Comedy"
  },
  {
    "_id": 28,
    "name": "Action"
  }
]
```

</a>

<a id="add-actors">

## Example - Add actors

```
Request Body:
{
  "actors":["Odunlade Adekola", "Dwayne Johnson"]
}

Response:
- 200 OK
[
  "Odunlade Adekola",
  "Dwayne Johnson"
]
```

</a>

<a id="add-movies">

## Example - Add movies

```
Request Body:
{
  "movies":["Elesin Oba", "Red Notice", "House Party"]
}

Response:
- 200 OK
[
  "Elesin Oba",
  "Red Notice",
  "House Party"
]
```

</a>

<a id="get-preferences">

## Example - Get all preferences

```
Response:
- 200 OK
{
  "preferredBy": "641b28974ac75a34294b1cf2",
  "__v": 17,
  "actors": [
    "Odunlade Adekola",
    "Dwayne Johnson"
  ],
  "movies": [
    "Elesin Oba",
    "Red Notice",
    "House Party"
  ],
  "genres": [
    {
      "_id": 35,
      "name": "Comedy"
    },
    {
      "_id":28,
      "name": "Action"
    }
  ]
}
```

</a>
