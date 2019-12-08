# rocks-fall
https://vast-citadel-52957.herokuapp.com/ url
## Table of Contents
  1. [Summary](https://github.com/The-Ryan-Mobley/rocks-fall/blob/master/README.md#summary)
  2. [Homepage](https://github.com/The-Ryan-Mobley/rocks-fall/blob/master/README.md#homepage)
  3. [CharacterSheet](https://github.com/The-Ryan-Mobley/rocks-fall/blob/master/README.md#CharacterSheet)
  4. [GameLobby](https://github.com/The-Ryan-Mobley/rocks-fall/blob/master/README.md#GameLobby)
## Summary

  Official Dungeons and dragons site for information on how to play D&D I will explain the more technical aspects of the app in this readme.
  https://dnd.wizards.com/dungeons-and-dragons/what-is-dd
  
  https://dnd.wizards.com/ 
  
  Dungeons and Dragons is a game that requires players to keep track of a lot of information. Rocks fall seeks to alleviate this by letting users keep track of their character sheets digitally. Users can also chat and create lobbies to play games where they can vuew other people's character sheets. Users can create an account by selecting the create account button in the top right corner. All this is made possible thanks to a combination of Redux and Socket.Io built on a MERN (MngoDb, Express, React, Nodejs) Stack. 

## Homepage
  ![Home](https://drive.google.com/uc?export=view&id=1yHxsqTAOe-R6CYoiEsrCyltWzyC31vWx)
  ### Accounts
   To create an account users can click the CREATE button in the top right of the header. Since this is a small project it only requires a username, password, and a confirm for your password. Passwords are stored into the database using a sha512 hashing algorithm for security. Once users have an account they can login by clicking the LOGIN button where they can enter their credentials. Once logged in users have access to the site's features. The site keeps track of sessions by saving the user's public account information such as their username into local storage, so it can be read and stored by redux on page load.
  ### Chat
   There is a chat option accessible by anyone currently logged in. Users can type in the text field below the chat box; then press the post button to send a message viewable to everyone currently on the homePage. The messages are stored by listening for a socket emission which is then stored into an array in the redux state.
  
  ### Character Creation
  This is the main purpose of the app. User's can create a D&D character by clicking the create character button. Once users have atleast one character saved they will start to appear to the right side of the screen in desktop view and above the chat on mobile view. Characters will be listed with their name, level, and player class next to a view button to view and edit their information, and a select button to choose what character the user wants to play as.
  
  ### Hosting and Joining Lobbies
   Once users have a character they can select them by clicking the select button down in the character list. When the user has a character selected they can join a lobby where they will be prompted to type in the lobby name and password. If users wish to host a game they can click the create lobby button where they will be prompted to choose a lobby name and password. 
  
## CharacterSheet
  ![CharacterSheet](https://drive.google.com/uc?export=view&id=1D0e0HKorGEX0QcFqxAVchModjwq_HLoK)
  ### stats
  This is where the real meat of the app resides. Here are several text fields where user's can enter a characters stats, biography, inventory, and player class abilities There are too many to mention in this document, but needless to say these are al ltext fields that store their information in the redux state. Once the user either clicks the create, or save buttons depending on if its a new character, or a current one the new information will be stored into the database
  ![spells](https://drive.google.com/uc?export=view&id=1Pnor8KcNLJQvuHxoRI_TkLRX7lwdYAF5)
  
  ![spellBlocks](https://drive.google.com/uc?export=view&id=1PU6fLAJGQ2RvYZv1iCOeePA9jHT-hj3D)
  ### spells
   One of the more fun aspects of D&D is the wide range of spells available to players. The core rule book alone has over 300 spells players can choose from, and one of the biggest appeals of a D&D app is that it makes keeping track of all these as easy as clicking a button! Users need to select a spell casting class in the top right corner. Once users have designated what class they want to select spells from they can select them based on the spell level in the spell blocks in the body of the spell sheet. Each block has a drop down with every spell available to that class at that level. Once users select a spell, its information will appear in the box at the top of the document. When users click the + button it will add that spell to the characters spell list. Users can delete spells in the spell list by clicking the X button next to the spell name.

## GameLobby
  ![lobby](https://drive.google.com/uc?export=view&id=1meI4rbztpkeII3tvHv0Tfm7r8f_BFzDo)
  Here players can chat and see other players in the lobby. Players can view read-only versions of other player's characters. Players can also roll dice with the dice inputs. If a player wants to leave the lobby they can click the leave button in the top right. Like in the home page there is a chatbox for players in the lobby. Lobby session tracking is accomplished via a combonation of mongo, socket and redux. When players join the redux state is updated with the previos data in the database, with the new user data added with a socket emission. The database is then updated so that when new users join, they keep current information. A similar process is done when users leave the lobby. When the host leaves every player is kicked from the lobby and the lobby data is removed from the database. 



