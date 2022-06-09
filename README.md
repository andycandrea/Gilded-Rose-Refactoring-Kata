# Gilded Rose Kata
========================

The Gilded Rose Kata following the style from the
[Sandi Metz](https://twitter.com/sandimetz) presentation
[All the Little Things](https://www.youtube.com/watch?v=8bZh5LMaSmE).

## Instructions

The objective of this kata is to practice refactoring. This kata motivates the
need for refactoring as follows:

* The original implementation is spaghetti code and difficult to glean context.
* The tests of the current implementation pass, but there are a number of
  pending tests.
* If you wanted to implement the code to get the pending tests to pass, it would
  not be easy since the existing code is very hard to work with.
* You can use the passing tests to refactor the code to make it more
  extensible before implementing new functionality (also known as a
  [preparatory refactoring](http://martinfowler.com/articles/workflowsOfRefactoring/#preparatory)).

In this exercise, treat the tests as your requirements and do not modify them.
This means that the public API of the `GildedRose` class (meaning its public
methods, properties and method signatures) must remain constant. In other words,
the `GildedRose` class must be present and have the following attributes:

* A constructor that takes `name`, `quality` and
  `daysRemaining`/`days_remaining` keyword arguments.
* A public `tick` method that takes no arguments.
* A public method for each of `name`, `days_remaining` and `quality` for Ruby
  and a public property for each of `name`, `daysRemaining` and `quality` for
  JavaScript.

The Gilded Rose kata is a particularly good refactoring exercise because there
are so many possible approaches to improving the code while still having it
work. Feel free to compare and contrast your solutions with others.

After refactoring, run the tests to ensure the system still works as expected.
The requirements (given below) are not as comprehensive as the tests, so feel
free to reference them while refactoring in case of any ambiguity.

## Setup

### Ruby

#### Getting Started

* Install Ruby 2.7 or 3.x
  * For rbenv: `rbenv install 3.1.2`
* Install `bundler`
  * `gem install bundler`
* Install the dependencies
  * `bundle`

To run the tests: `bundle exec rspec spec`

To run rubocop: `bundle exec rubocop`

#### Where to Start

Begin refactoring the existing `lib/gilded_rose.rb` class.

### JavaScript

#### Getting Started

* Install node 16.x.x
  * For nvm: `nvm install 16.15.1`
* Install `yarn`
  * `npm install --global yarn`
* Install the dependencies
  * `yarn`

To run the tests: `yarn tests`

To run eslint: `yarn lint`

#### Where to Start

Begin refactoring the existing `src/GildedRose.js` class.

## Requirements for the Gilded Rose app

Hi, and welcome to the Gilded Rose. As you know, we are a small inn with a prime
location in a prominent city run by a friendly innkeeper named Allison. We also
buy and sell only the finest goods. Unfortunately, our goods are constantly
degrading in quality as they approach their sell-by date. We have a system in
place that updates our inventory for us. It was developed by a no-nonsense type
named Leeroy who has moved on to new adventures. Your task is to add the new
feature to our system so that we can begin selling a new category of items.
First, an introduction to our system:

* All items have a `daysRemaining` value which denotes the number of days we
  have left to sell the item
* All items have a `quality` value which denotes how valuable the item is
* At the end of each day our system lowers both values for every item

Pretty simple, right? Well, this is where it gets interesting:

* Once the sell-by date has passed, quality degrades twice as fast
* The quality of an item is never negative
* "Aged Brie" actually increases in quality the older it gets
* "Sulfuras", being a legendary item, never has to be sold. Its quality will
  always be equal to 80.
* The quality of an item is never negative and cannot be above 50 for
    non-legendary items.
* "Backstage passes", like aged brie, increase in quality as its `daysRemaining`
  value approaches; quality increases by 2 when there are 10 days or less and by
  3 when there are 5 days or less, but quality drops to 0 after the concert.

We have recently signed a supplier of conjured items. This will require an
update to our system in the near future.

* "Conjured" items degrade in quality twice as fast as normal items

Thankfully, Leeroy was able to write the tests for this new type of item before
leaving.

## Background

This version of the Gilded Rose stems from Sandi Metz's talk titled [All the
Little Things](https://www.youtube.com/watch?v=8bZh5LMaSmE) which is in turn
based on Jim Weirich's [version](https://github.com/jimweirich/gilded_rose_kata#original-description-of-the-gilded-rose).
This particular repo is a fork of
[this repository](https://github.com/clayhill/Gilded-Rose-Refactoring-Kata)
which has additional attribution and context. The Ruby and JavaScript example
solutions were written by myself as was the base JavaScript implementation.

The Gilded Rose itself is a reference to an inn in World of Warcraft.
