# Broad-Infinity Hackathon (Priya - 1705929)


## Daily Progress
---
 - ### Day 1
        - Express server setup
        - Created Schema for the database (MongoDB)
        - Setup connection with the database
        - Completed /list API end point
- ### Day 2
        - Completed /add API end point 
        - Split the different endpoints to a seperate file, using express router
        - Found a way to delete data from the database after a given time duration

## API Usage
---

```
    1.  /list - GET
        - returns the all the todos stored in the database, in JSON format

    2.  /add - POST
        - accepted parameters
            - taskName (String,Required)
            - taskDescription (String,Required)
            - creator (String,Required)
            - duration (Number,Required)
        - returns the saved todo in JSON format

```
