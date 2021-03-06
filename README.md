# The Big Kahuna Burger App

![License Icon](https://img.shields.io/badge/license-GPL3.0-informational.svg)

Mmm-mmmm! This is a tasty burger... powered by node, express, mySQL and rendered with handlbars.js.

## Table of Contents

- [Location](#locations)
- [Application Summary](#application-summary)
- [Demo](#demo)
- [Installation](#installation)
- [Testing](#testing)
- [Usage Instructions](#usage-instructions)
- [Future Development](#future-development)
- [Contributors](#contributors)
- [Resources](#resources)
- [Point of Contact](#point-of-contact)
- [License](#license)

## Locations

GitHub Repository Link: https://github.com/Gavin867/Big_Kahuna_Burger_App
Deployed Heroku Link: 

## Application Summary

![Main Menu](https://github.com/Gavin867/Big_Kahuna_Burger_App/blob/main/public/assets/images/readme-images/main-page.png)

The Big Kahunna Burger App can be used to store hamburger information in a mySQL database for easy reference. With this application you can perform the following tasks:

1. Create new burgers in the "Burgers Queued" list.
2. Move burgers to the "Burgers Eaten" list.
3. Delete burgers from the application and database.

## Demo

![Demo](https://github.com/Gavin867/Big_Kahuna_Burger_App/blob/main/public/assets/images/readme-images/bkb-demo.gif)

## Installation

1. Install mySQL and MySQL workbench using the directions outlined in the '[MySQL Installation Guide](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)'.
2. Clone the repository to your computer.
3. Open a new terminal instance in the Big Kahuna Burger App code file and run "npm init -y" to install the necessary node modules.
4. Create a .env file in the root of the directory with the following data:

        DB_USER=root
        DB_PASS=**Your Password Here**
        DB_DATABASE=bigkahuna_DB

6. Log into your mySQL workbench, copy the contents of Big Kahuna Burger App's bigkahuna_DB.sql file into your workbench and hit the lightning button to create your database.
7. If you would like to use the seed data, copy the contents of Big Kahuna Burger App's bigkahuna_seeds.sql file into your workbench and hit the lightning button to add the data to your tables.
8. In the Big Kahuna Burger App file code terminal, type "node app" and hit ENTER.
9. A the application will launch and you're up and running!

## Testing

See usage instructions.

## Usage Instructions

1. To CREATE a Burger, type the name of your new burger into the form and click the "Create Burger" button.
2. To UPDATE a Burger and move it from the "Burgers Queued" list to the "Burgers Eaten" list, click the "Eat Burger" button next to the corresponding Burger.
3. To DELETE a Burger from the "Burgers Eaten" list and the application database, click the "Delete Burger" button next to the corresponding Burger.

## Future Development

Additional goals and application features for future devlopment include:

- Repurpose app to something useful... like a chores task list.
- Additional testing for breakage points and bug fixes.

## Contributors

- Gavin Calkins - https://github.com/Gavin867

## Resources

- Lessons from UW Full Stack Flex Boot Camp.
- Tutoring with Namita Shenai (https://github.com/NVK2016)


## Point of Contact

Have questions? Contact Gavin Calkins at [gavin.calkins@gmail.com](mailto:gavin.calkins@gmail.com?subject=Hi%20Gavin!%20I%20have%20a%20question%20about%20The%20Big%20Kahuna%20Burger%20App!).
 
## License

    Big Kahuna Burger App. Mmm-mmmm! This is a tasty burger... powered by node, express, mySQL and rendered with handlbars.js.

    Copyright (C) 2021  Gavin B. Calkins 

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.