
# Register Login Node.js Api

Registration project with admin panel where you can see the list of all registered users

## Tech Stack

**Client:** Html, Css, Javascript

**Server:** Node, Express, MySql


## Screenshots

![App Screenshot](https://i.ibb.co/5TpPbBx/image.png)

![App Screenshot](https://i.ibb.co/nwcx9kJ/image.png)


## Deployment

To deploy this project run:

```bash
  npm i 
```
```bash
  npm start 
```
after installing the required packages, you need to create a table named "users" using the mysql database. And then add your database name in the "registerDB" file

```javascript
const RegisterDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "Your database name",
});
```
## API Reference

#### Get all Users

```http
  GET /api/users/all-users
```

#### Get User

```http
  GET /api/users/get-user/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |



#### Add new user

```http
  POST /api/users/new-user
```

#### Remove user

```http
  GET /api/users/remove/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

#### Edit user info

```http
  GET /api/users/edit/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

