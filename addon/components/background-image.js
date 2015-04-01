import Ember from 'ember';
import BackgroundImage from 'ember-cli-image/components/background-image';
import ImgixMixin from '../mixins/imgix-mixin';
import ImgixStaticMixin from '../mixins/imgix-static-mixin';

BackgroundImage.reopen( ImgixMixin );
BackgroundImage.reopenClass( ImgixStaticMixin );

export default BackgroundImage;
