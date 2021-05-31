## About

<p>This Trivia application as the name suggests, is based on the game Trivia. Users are able to log in, and are navigated to a category selection page where they can select from three categories and beging playing the game. </p>
<p>Upon selecting an answer, users can see correct and incorrect answers. After completing 10 questionaires, the final score is revealed.</p>

## Features

<div align="center">
  <img src="images/Trivia.png">
</div>


**Models** <br>
User, Category, Question<br>

**Controller** <br>
Questions<br>
CategoriesController<br>
UsersController<br>

## API Database

- [x] <a href="https://opentdb.com/">Trivia API</a>

## Installation

<strong>Back-End</strong>

```ruby
$ git clone 👾
$ bundle install
$ rails db:create && db:migrate
$ rails db:seed
$ rails s
```

<strong>Front-End</strong>

```react
yarn add react-router-dom
yarn add redux-thunk
yarn add react
yarn start
```