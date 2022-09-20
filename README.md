# Guess the artist 

#### Frontend technologies:
`REACT`
`REDUX`
`SAGA`
`LESS`

#### Backend technologies:
`NODE JS`
`EXPRESS`
`MONGOOSE`
`MONGO DB CLOUD`

***

### Versions: 

Node js: `16.14.2`
NPM: `8.5.0`

For automatically install all dependencies and launch the server use command from root directory:

`npm run launch`

After `stage 3/3` you can open app on http://localhost:3007/

### How it works?

1. When the server starts it loads artists and albums data from iTunes; Artists' names locate in file `server/artists/artists.json`; First it verifies whether are artists name valid and saves valid data to cloud database (Mongo Atlas); I think it's a good way to have one endpoint for client app.

2. Next it loads by iTunes API albums of each artist and saving data to the database;

3. After a request from the client for a new game it chooses artists and their albums in a procedural way, depending on a random seed from the client. Of course, I can do it randomly, but I think procedural is interesting
   because if we scale the game more than 5 rounds and want to know which albums the player saw and guessed we could generate all "pseudo-random" numbers. But, actually, it will not be working if we change the list of artists. :)
4. After each artist selection by the player the application state saves to browser local storage. If the page refreshes all data loads to redux store from browser storage;
5. On the Results page if you click on player block you can see the history. All artists and albums are what player guessed. But this information not saving anywhere, just made because of the procedural way and random seed number of the player;
***

### What will be good to realize?

1. Error handling and error alerts messages;
3. Create `.env` with settings and admin page for  management of list of artists, album loading limits, etc.;
4. Getting data to Results page by WebSocket;
