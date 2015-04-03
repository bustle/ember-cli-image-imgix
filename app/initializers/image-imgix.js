import ImgComponent from 'ember-cli-image/components/x-img';
import BackgroundImageComponent from 'ember-cli-image/components/background-image';
import ImageContainerComponent from 'ember-cli-image/components/image-container';
import ImgixMixin from 'ember-cli-image-imgix/mixins/imgix-mixin';
import ImgixStaticMixin from 'ember-cli-image-imgix/mixins/imgix-static-mixin';

export function initialize() {
  ImgComponent.reopen( ImgixMixin );
  ImgComponent.reopenClass( ImgixStaticMixin );

  BackgroundImageComponent.reopen( ImgixMixin );
  BackgroundImageComponent.reopenClass( ImgixStaticMixin );

  ImageContainerComponent.reopen( ImgixMixin );
  ImageContainerComponent.reopenClass( ImgixStaticMixin );
}

export default {
  name: 'image-imgix',
  initialize: initialize
};
