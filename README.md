# ymb-wat-project

Memorization Game
Yvette M. Boone

Full - MEAN Stack Application

TECHNOLOGIES
Server - Node.js (port 3034)
Backend Framework:  Express
Database:  MongoDB (used Mongoose Framework)
Front End: Angular (port 4200)
CSS/Style: Bootstrap Framework


Synopsis
This full stack application is a game to test your memory of past/present WillowTree Employees.  

        Modes - You can  switch modes anytime during the game.
            Team Mode (Where you are only presented options of matching current employees of WillowTree)
            Picture Mode (Five pictures, One Name)
            Name Mode (One picture, Five faces)
        Exit - clears the board of all your responses, and sets up for a new game.
        Play Again - Presents a new set of options.
        Begin - Starts a new game in Picture Mode.

        Once a match is made, that person is no longer presented as an option in the pool of matches.


    Back End API:   (contains the logic for the game)
        Folder Structure:
            app.js : brings in all needed modules, contains middle ware, connects to MongoDB, sets up Node.js server on     localhost, connects to mongoose, and contains all endpoints.
            models/people.js : contain all endpoint functions
            seeds/people.json:  contains seeds for db (npm package installs by running 'seed' inside the seeds folder)
        GET Endpoints
            /api/picMode/newgame -
                    sets was_matched=false for all objects, and provides random set of five objects of unmatched employees
            /api/picMode/playagain -
                    provides random set of five objects of unmatched employees
            /api/finit -
                    sets was_matched=false for all objects
                    NOTE: these additional endpoints behave exactly the same:
                                /api/<teamMode> or <nameMode>/newgame and /api/<teamMode> or <nameMode>/playagain
        POST Endpoint:
            /api/picMode/match  and /api/teamMode/match - sends the updated object of the person corresponding to the name displayed.  Either the was_matched=true or match_attempts++ is updated
            /api/nameMode/match - sends the updated object of the person corresponding to the picture displayed.  Either the was_matched=true or match_attempts++ is updated.

        MongoDB
            database name: game
            collection name: peoples
                collection format (example)
                        {
                            "id": "4NCJTL13UkK0qEIAAcg4IQ",
                            "type": "people",
                            "slug": "joel-garrett",
                            "jobTitle": "Senior Software Engineer",
                            "firstName": "Joel",
                            "lastName": "Garrett",
                            "headshot": {
                                        "type": "image",
                                        "mimeType": "image/jpeg",
                                        "id": "4Mv2CONANym46UwuuCIgK",
                                        "url": "//images.contentful.com/3cttzl4i3k1h/4Mv2CONANym46UwuuCIgK/cbeb43c93a843a43c07b1de9954795e2/headshot_joel_garrett.jpg",
                                        "alt": "headshot joel garrett",
                                        "height": 340,
                                        "width": 340
                            },
                            "socialLinks": []
                        }

    Front End code
        Folder Structure:
            feapp/src/app/components:  contains all components for endpoints and navbars
            feapp/src/services: contains the file use as a dataservice to communication to/from Backend
            feapp/app
        input type: json objects
        GET REQUESTS:  (receive data in sets of 5 with the following stipulation)
                    who currently work at company (has a jobTitle)
                    both current and past employees
                    only non-matched employees (all sets)
                    provide statistics on the average # of attempts to match each person
        POST REQUESTS:
                    Update  and receive updated json object

        Future Enhancements:
            Include game stats for the current user
            provide better navigation (play again button)
            display additional responses for attempted match
            provide additional modes which  may include
                    -Challenge Mode (display 10 pictures & and one name).
