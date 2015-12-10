kudos
========

![animation](/kudos.gif?raw=true)

Install:
`npm install git@github.com:yusukeshibata/kudos.git`

Kudos implementation like [svbtle.com](https://svbtle.com/).

```javascript
var kudos =require('kudos');
var k = kudos(document.querySelector('.kudo'),{
  // set initial state(true:already kudoed.)
  state:false,
  // on kudo
  onkudo:function(next) {
    someajaxrequest(function(err,result) {
      next();
    });
  }
});
```
License
=======

MIT
