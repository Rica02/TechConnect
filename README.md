# TechConnect
Web application project developed by Matthew Nguyen, Bo-Han Chen and Rica Mae Averion.

## Table of contents
1. [Introduction](#introduction)
2. [Tools and langauges](#tools-and-languages)
3. [Features implemented](#features-implemented)
4. [Future plans](#future-plans)
5. [How to run the project](#how-to-run)


## Introduction <a name="introduction"></a>

TechConnect: Tutoring Provider is a service (idea) that aims to provide one-on-one tutoring and assistance, either in person or remotely through Zoom, on various tech topics of any level, such as such as how to use common devices like PC, laptop, smartphones and tablets, how to use apps, social media platforms and other common programs, browsing the Internet and general online safety and security.

Prospect students will be able to contact us by email or phone through our website and arrange a consultation with us: this initial consultation will enable us to identify the specific needs and requirements of the customer, assess their current level of understanding of the target technology, create a personalised program for them, as well as to determine whether or not they have the adequate equipment to put the tutoring into practice.

Tutoring older adults requires a certain set of skills, as they may need special care and understanding — therefore the tutors we will hire will also be assessed for quality assurance. Tutors can be of any age group, from younger students looking for a side job to retired tech savvy seniors who would like to give a hand to their peers, and as long as they have suitable teaching skills and relevant tech knowledge, with kindness and patience they will be able to deliver tutoring successfully.

## Tools and languages <a name="tools-and-languages"></a>
* JavaScript
* React JS
* Node/Express JS
* Styled components
* Zoom API
* AWS RDS
* MySQL

## Features implemented <a name="features-implemented"></a>
* Public website pages
* User sign in, sign up, forgot password
* Private pages for authenticated users (3 levels: admin, tutor, student)
* Zoom API for online meeting scheduling
* Integration with MySQL on AWS server to store and retrieve data

NOTE:

Currently there is a limitation in the Zoom integration. In order for an admin (the account creating the Zoom meeting) to designate the tutor as “alternative host” so they are able to start the meeting, both accounts need to have paid Licenses. I have used free, unlicensed Basic accounts, therefore at this time meetings can only be started by the admin.

More on alternative host: https://support.zoom.us/hc/en-us/articles/208220166-Alternative-host

More on scheduling privileges: https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-privilege


## Features yet to be implemented / future plans <a name="future-plans"></a>
Missing features and improvements:
* Manage users and meetings from admin side
* Automate response system (example: when applying to become a tutor)
* Copyright and legal contracts (terms of service and tutor hiring) when project’s launching about to occur
* Can be improved: web security, website accessibility/customizability, mobile support and responsiveness (mobile will not include joining/starting Zoom meetings)
* Payment integration with Stripe



## How to run the project<a name="how-to-run"></a>


Step 1: Download the project as ZIP OR clone the project in a local folder of your choice using the following command in your terminal:


```
$ git clone https://github.com/Rica02/TechConnect.git
```

Step 2: If downloaded as ZIP, unzip the project in a local folder of your choice.


Step 3: In the root folder of the project, open your IDE's terminal tool and run this command line to install dependencies:


```
$ npm install
```

Step 4: Install environment variables. Still in the root of the project, run this command:

```
$ npm touch .env
```

Step 5: Open the newly created .env file and copy paste environment variables here. The environment variables will be provided to you in a text file called "environment-variables.txt". Save the .env file.

Step 6: Run the project with this command:

```
$ npm run start
```

Step 7: Run the back-end server with this command:

```
$ npm node server/index.js
```

Step 8: The project is now running on http://localhost:3000/, with back-end running on port 3007.
