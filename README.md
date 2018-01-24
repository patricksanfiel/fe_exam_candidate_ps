# SCOIR Technical Interview for Front-End Engineers
This repo contains an exercise intended for Front-End Engineers.

## Instructions
1. Fork this repo.
1. Using technology of your choice, complete [the assignment](./Assignment.md).
1. Update this README with
    * a `How-To` section containing any instructions needed to run/access your system.
    * an `Assumptions` section containing documentation on any assumptions made while interpreting the requirements.
1. Before the deadline, submit a pull request with your solution.

## Expectations
1. Please take no more than 8 hours to work on this exercise. Complete as much as possible and then submit your solution.
1. This exercise is meant to showcase how you work. With consideration to the time limit, do your best to treat it like a production system.

## How-To
1. Clone a copy of this repo.
`git clone https://github.com/patricksanfiel/fe_exam_candidate_ps.git`
2. CD into the directory that was created when cloning the app.
`cd fe_exam_candidate_ps.git`
3. If you have not downloaded and installed [Node.js](https://www.npmjs.com/get-npm), do so now.
4. Run `npm install`
5. CD into the puppy-picker folder
`cd puppy-picker`
6. Run `npm start`. This will start the development server and allow you to view the project at the addresses listed in your terminal.
7. To pick a dog breed card, you can either use the input field or the 'catch a random breed' button. 
   * The 'catch a random breed' button will generate a random dog card(consisting of a breed name, picture, and a delete button). 
   * The input field will allow users to select which breed they would like a dog card for, by either typing out the breed name or            selecting the breed from a dropdown menu.

## Assumptions
1. Dog cards should all be the same size.
2. Only one picture per breed from the API should be used.
3. Which picture is used on the dog card does not matter.

## Technologies used:
1. Jed Watson's [React Select component](https://github.com/JedWatson/react-select)
2. [Postman](https://www.getpostman.com/) API Development Environment
