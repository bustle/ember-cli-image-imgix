import Ember from 'ember';
import XImg from 'ember-cli-image/components/x-img';
import ImgixMixin from '../mixins/imgix-mixin';
import ImgixStaticMixin from '../mixins/imgix-static-mixin';

XImg.reopen( ImgixMixin );
XImg.reopenClass( ImgixStaticMixin );

export default XImg;
