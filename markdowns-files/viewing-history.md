<a id="add">

## Example - Add movie to viewing history

```
Request Body:
{
  "movies":["Anikulapo"]
}

Response:
- 200 OK
[
  {
    "_id": 1023994,
    "viewedBy": "641b28974ac75a34294b1cf2",
    "title": "Aníkúlápó",
    "genre": [
      18,
      14
    ],
    "overview": "It tells the story of Saro, a man seeking for greener pasture, but unfolding events and his affair with the king's wife, he encounters his untimely death and with Akala, a mystical bird believed to give and take life.",
    "releaseDate": "2022-09-30",
    "rating": 5
  }
]
```

</a>

<a id="rate">

## Example - Rate a movie watched

```
Request URL:
/user/movie/1023994/rating?rate=9

Response:
- 200 OK
{
    "_id": 1023994,
    "viewedBy": "641b28974ac75a34294b1cf2",
    "title": "Aníkúlápó",
    "genre": [
        18,
        14
    ],
    "overview": "It tells the story of Saro, a man seeking for greener pasture, but unfolding events and his affair with the king's wife, he encounters his untimely death and with Akala, a mystical bird believed to give and take life.",
    "releaseDate": "2022-09-30",
    "rating": 9
}
```

</a>

<a id="get-all">

## Example - Get all movie watched

```
Response:
- 200 OK
{
  "_id": 1023994,
  "viewedBy": "641b28974ac75a34294b1cf2",
  "title": "Aníkúlápó",
  "genre": [
    18,
    14
  ],
  "overview": "It tells the story of Saro, a man seeking for greener pasture, but unfolding events and his affair with the king's wife, he encounters his untimely death and with Akala, a mystical bird believed to give and take life.",
  "releaseDate": "2022-09-30",
  "rating": 5
}
```

</a>
