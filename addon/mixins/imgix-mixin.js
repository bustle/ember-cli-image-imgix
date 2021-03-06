import Ember from 'ember';

/**
  `ImgixMixin` is an `ImgComponent` Mixin that supports
  the imgix.com image service.  It adds imgix specific
  parameters and presets to base image src urls.

  @class ImgixMixin
 */

var ImgixMixin = Ember.Mixin.create({
  imgixParams: null,
  forceDpr: false,
  processGifs: false,

  url: Ember.computed('src', 'imgixParams', 'forceDpr', function() {
    var src = this.get('src');
    var imgixParams = this.get('imgixParams');
    var klass = this.constructor;
    var params = '';

    // Gifs cannot be processed by imgix, unless you want it to be single frame
    if(!this.get('processGifs') && klass.urlIsGif(src)) {
      return src;
    }

    if(imgixParams) {
      params += imgixParams;
    }

    if(dprParams && this.get('forceDpr')) {
      params += dprParams;
    }

    return klass.addParams(src, params);
  })

});

var dprParams = (function() {
  var dpr = Math.floor(window.devicePixelRatio) || 1;
  if(dpr > 1) {
    return '&dpr=' + dpr;
  }
}());

export default ImgixMixin;
