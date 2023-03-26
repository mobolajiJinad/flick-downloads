<a id="actor">

## Example -Search for an actor

```
Request Body:
{
  "actor": "odunlade%20adekola"
}

Response:
- 200 OK
[
  {
    "name": "Odunlade Adekola",
    "gender": "Male",
    "popular_movies": [
      {
        "title": "Elesin Oba: The King's Horseman",
        "original_title": "Elesin Oba: The King's Horseman",
        "overview": "Inspired by true life events, in the Oyo Empire in the 1940's, Elesin Oba, the king's chief horseman, succumbs to the lure of beauty and sexual desire on the very evening he is set to die in order to fulfil his lifelong debt of ritual suicide to accompany the dead Alaafin to the realm of the ancestors, he derails from a very important generational and spiritual transaction. This sets in motion a series of catastrophic consequences, in a spell-binding film of emotions, humour, and tragic role reversals that puts ancient beliefs and customs on trial in an ever increasingly post-modern and Western world.",
        "release_date": "2022-09-10"
      },
      {
          "title": "Taxi Driver: Oko Ashewo",
          "original_title": "Taxi Driver: Oko Ashewo",
          "overview": "A small-town mechanic turned chauffeur for the mob gets caught up in the troubles of a beautiful sex worker, in this Scorsese-meets-Nollywood crime comedy that transforms the fast-paced and vibrant city of Lagos into an expressionistic film noir metropolis.",
          "release_date": "2015-11-13"
      },
      {
          "title": "The Vendor",
          "original_title": "The Vendor",
          "overview": "A newspaper seller bemoans his lack of success but is undermined by his own laziness when he gets a better job as a driver and finds his rich father.",
          "release_date": "2018-09-07"
      }
    ]
  }
]
```

</a>

<a id="movie">

## Example - Search for a movie

```
Request Body:
{
  "movie": "odunlade%20adekola"
}

Response:
- 200 OK
[
  {
    "name": "Red Notice",
    "overview": "An Interpol-issued Red Notice is a global alert to hunt and capture the world's most wanted. But when a daring heist brings together the FBI's top profiler and two rival criminals, there's no telling what will happen.",
    "release_date": "2021-11-04"
  },
  {
    "name": "SAS: Red Notice",
    "overview": "An off-duty SAS soldier, Tom Buckingham, must thwart a terror attack on a train running through the Channel Tunnel. As the action escalates on the train, events transpire in the corridors of power that may make the difference as to whether Buckingham and the civilian passengers make it out of the tunnel alive.",
      "release_date": "2021-08-11"
  },
  {
    "name": "Red Notice 2",
    "overview": "The first of two planned sequels to Red Notice (2021).",
    "release_date": ""
  },
  {
    "name": "Red Notice 3",
    "overview": "The second of two planned sequels to Red Notice (2021).",
    "release_date": ""
  }
]
```

</a>
