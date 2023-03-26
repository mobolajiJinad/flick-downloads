<a id="signup-examples">
  ### Example - Sign Up User

```
Request Body:
{
  "username":"Username",
  "email:"username22@gmail.com",
  "password":"secret@1user"
}

Response:
- 200 OK
{
  "user": {
    "username": "Username"
  },
  "token": "<your_token>"
}
```

</a>

<a id="login-examples">
### Example - Login User

```
Request Body:
{
  "usernameOrEmail":"username22@gmail.com",
  "password":"secret@1user"
}

Response:
- 200 OK
{
  "user": {
    "username": "Username"
  },
  "token": "<your_token>"
}
```

</a>
