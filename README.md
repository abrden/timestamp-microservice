# API: Timestamp Microservice
======
[FCC API Projects Challenge](http://www.freecodecamp.com/challenges/timestamp-microservice)

## User Stories
- [x] I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
- [x] If it does, it returns both the Unix timestamp and the natural language form of that date.
- [x] If it does not contain a date or Unix timestamp, it returns <code>null</code> for those properties.

## Example usage
`https://abrden-timestamp-ms.herokuapp.com/December%2015,%202015`
`https://abrden-timestamp-ms.herokuapp.com/1450137600`

## Example output
`{ "unix": 1450137600, "natural": "December 15, 2015" }`

## Live site
<https://abrden-timestamp-ms.herokuapp.com>