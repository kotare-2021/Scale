# Scale
Team: Scale
Karen, Anastasia, Silvia, James, Saula, Yousuf

Recreational Fishing App - collecting data for good


## The Tech
* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/)
* [Express](https://expressjs.com/en/api.html)
* [Knex.js (SQL)](https://knexjs.org/)
* [JWT Auth (Local)](https://jwt.io/)



## Views (Client Side)
  | Homepage | 
  | Fish info | General info of fish for users to help them with ID
  | Statistics | Show collective data of fish caught by region / time
  | Rules | Link to different MPI pages based on region / species selected
  | Login | View for user to enter their login credentials |
  | Register | View for user to sign up for the App |
  | Diary | Show users own data of fish caught by region / time
  | Achievements | Gamefication - show user badges based on their own stats

## Reducers (Client Side)

  | fish info |
  | auth | Store information regarding user logins, auth status and auth errors |


## Actions (Client Side)

  | type | data | purpose |
  | --- | --- | --- |

## API (Client - Server)

| Method | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- |
| Post | /api/auth/login | Yes | Log In a User | The Users JWT Token |
| Post | /api/auth/register | Yes | Register a User | The Users JWT Token |
| Get | /api/lost | No | Get the list of lost pets | Array of Objects (object = A Lost Pet) |
| Get | /api/found | No | Get the list of found pets | Array of Objects (object = A Found Pet) |
| Post | /api/lost | Yes | Add a Lost pet to the db | The Pet that was added (as an object) |
| Post | /api/found | Yes | Add a Found pet to the db | The Pet that was added (as an object) |

## Setup

Run the following commands in your terminal:

```sh
npm install
npx knex migrate:latest
npx knex seed:run
cp .env.example .env
```

To run in development:
```sh
npm run dev
```

To run in production:
```sh
npm start
```


## Heroku!!!

### Creating your app

Create your app with `heroku create [name]`

You can check that this was successful by running `heroku apps` to view a list of your apps


### Adding postgres

Add postgresql (hobby dev) to your app at `https://dashboard.heroku.com/apps/[APP NAME HERE]/resources`

Check that pg has been added by running `heroku addons` to ensure the postgresql db is on your app


### Deploying!

I have created several npm scripts that will be useful for deploying your app to heroku easily.

To push your local master branch to your heroku app:
```sh
npm run h:deploy
```

Run heroku migrations:
```sh
npm run h:migrate
```

Run heroku seeds:
```sh
npm run h:seed
```

If ever you need to rollback, you can also:
```sh
npm run h:rollback
```


### Ta-Da!
Your app should be deployed!

