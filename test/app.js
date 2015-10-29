var kudos =require('kudos');
var k = kudos(document.querySelector('.kudos'),{
  state:false,
  // on kudo
  onkudo:function(next) {
    next();
  }
});
