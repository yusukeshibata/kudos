require('!style!css!./style.css')
var html = require('jade!./kudos.jade')
var bean = require('bean')

var datas = [];
var donothing = function(evt) {
  evt.stop();
};
var start = function(evt) {
  evt.stop();
  var target = evt.currentTarget;
  var attr = Array.apply(null,target.attributes);
  var id = attr.filter(function(v) {
    return v.name=='data-id';
  }).shift().value;
  var d = datas[id];
  if(d.state) return;
  target.className = 'kudos-js-container hover';
  var done = function() {
    if(!d.state) {
      target.className = 'kudos-js-container yes';
      d.state = true;
      if(d.onkudo) {
        d.onkudo(function() {
          // done
        });
      }
    }
  };
  d.tid = setTimeout(function() {
    done();
  },1200);
};
var cancel = function(evt) {
  evt.stop();
  var target = evt.currentTarget;
  var attr = Array.apply(null,target.attributes);
  var id = attr.filter(function(v) {
    return v.name=='data-id';
  }).shift().value;
  var d = datas[id];
  clearTimeout(d.tid);
  if(d.state) return;
  target.className = 'kudos-js-container';
};
var kudos = function(sel,data) {
  if(!data) data = {};
  data.id = datas.length;
  sel.innerHTML = html(data);
  datas.push(data);
  if('ontouchstart' in document.documentElement) {
    bean.on(sel.firstChild,'touchstart',start);
    bean.on(sel.firstChild,'touchend',cancel);
  } else {
    bean.on(sel.firstChild,'mouseover',start);
    bean.on(sel.firstChild,'mouseout',cancel);
  }
  bean.on(sel,'click touchstart touchend mouseover mouseout',donothing);
};

module.exports = kudos;
