import BackgroundImageComponent from 'ember-cli-image/components/background-image-component';
import ImageContainerComponent from 'ember-cli-image/components/image-container-component';
import ImgComponent from 'ember-cli-image/components/img-component';

import ImgixMixin from 'ember-cli-image-imgix/mixins/imgix-mixin';
import ImgixStaticMixin from 'ember-cli-image-imgix/mixins/imgix-static-mixin';

export function initialize() {
  BackgroundImageComponent.reopen( ImgixMixin );
  BackgroundImageComponent.reopenClass( ImgixStaticMixin );

  ImageContainerComponent.reopen( ImgixMixin );
  ImageContainerComponent.reopenClass( ImgixStaticMixin );

  ImgComponent.reopen( ImgixMixin );
  ImgComponent.reopenClass( ImgixStaticMixin );
}

export default {
  name: 'image-imgix',
  initialize: initialize
};
