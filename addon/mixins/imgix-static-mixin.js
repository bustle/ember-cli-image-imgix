import Ember from 'ember';
/**
  Static properties and methods
 */
var ImgixStaticMixin = {
  addParams: function(src, params) {
    if(!src) { return null; }
    if(!params) { return src; }
    if(src.indexOf('?') === -1) {
      src += '?';
    }
    return src + params;
  },

  urlIsGif: function(url) {
    return url ? !!url.match(/\.gif$|\.gif\?/) : false;
  }
};

export default ImgixStaticMixin;
