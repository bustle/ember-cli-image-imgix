import BackgroundImage from 'ember-cli-image/components/background-image';
import ImageContainer from 'ember-cli-image/components/image-container';
import XImg from 'ember-cli-image/components/x-img';

import ImgixMixin from 'ember-cli-image-imgix/mixins/imgix-mixin';
import ImgixStaticMixin from 'ember-cli-image-imgix/mixins/imgix-static-mixin';

export function initialize() {
  BackgroundImage.reopen( ImgixMixin );
  BackgroundImage.reopenClass( ImgixStaticMixin );

  ImageContainer.reopen( ImgixMixin );
  ImageContainer.reopenClass( ImgixStaticMixin );

  XImg.reopen( ImgixMixin );
  XImg.reopenClass( ImgixStaticMixin );
}

export default {
  name: 'image-imgix',
  initialize: initialize
};
