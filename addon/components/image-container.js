import Ember from 'ember';
import ImageContainer from 'ember-cli-image/components/image-container';
import ImgixMixin from '../mixins/imgix-mixin';
import ImgixStaticMixin from '../mixins/imgix-static-mixin';

ImageContainer.reopen( ImgixMixin );
ImageContainer.reopenClass( ImgixStaticMixin );

export default ImageContainer;
