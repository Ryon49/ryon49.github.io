---
title: 'Getting Started'
date: '2011-09-06 23:32:54.000000000 +09:00'
categories: [Demo]
pin: true
---

| Company                      | Contact          | Country |
|:-----------------------------|:-----------------|--------:|
| Alfreds Futterkiste          | Maria Anders     | Germany |
| Island Trading               | Helen Bennett    | UK      |
| Magazzini Alimentari Riuniti | Giovanni Rovelli | Italy   |


### Task list

- [ ] TODO
- [x] Completed
- [ ] Defeat COVID-19
  - [x] Vaccine production
  - [ ] Economic recovery
  - [ ] People smile again


<!-- <img src="https://my-blog-ryon49.s3.amazonaws.com/avatar.jpg" alt="drawing" width="200"/> -->
TODO: change image src to a cdn url


## Inline code

This is an example of `Inline Code`.

This is a second example of `Inline Code 2`.


## Code block

#### Console

```rust
#[derive(Debug)]
  pub enum State {
      Start,
      Transient,
      Closed,
  }
  
  impl From<&'a str> for State {
      fn from(s: &'a str) -> Self {
          match s {
              "start" => State::Start,
              "closed" => State::Closed,
              _ => unreachable!(),
          }
      }
  }
```
