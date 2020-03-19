# infinite-calculator
 Infinite collaborative calculator to big numbers and infinity actions (multi users) ... built with TypeScript

## Origin
This is practice exercises for the university class (tdd, oop, patterns) with [Typescript](https://www.typescriptlang.org/) and [Mocha](https://mochajs.org/)

## Ideas / Requirements

 - Perform basic operations (addition, subtraction, multiplication, division).
 - But without using the language operations 
   - (you can't use the + sign to add, neither -, * or /)
 - It must be a collective calculator (everything must be used in real time). Same calculation.
- The operands and operators it receives must be alphanumeric
  - That is, instead of entering "1" you must enter "one",
  - That is, a number "100" must enter "onezerozero" (could also be "one zero zero")
  - instead of "+" you must enter "add"
- The operation must be in real time,
    - A value must be entered and the calculation must show them all
  - OPTIONAL: you can see the list of operands and operators
  - Unlimited. No entry and exit limits. Any integer (not decimal values)
