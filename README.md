# ember-cli-image-imgix

This addon builds on top of [ember-cli-image](https://github.com/bustlelabs/ember-cli-image) to add imgix.com support.

## Installation
For Ember CLI v0.2.3 or higher
```
ember install ember-cli-image-imgix
```
or
```
ember install:addon ember-cli-image-imgix
```
## Usage
This addon gives you the ability to specify values for `imgixParams` and `forceDpr`
properties on all supported image components (stateful-img, background-image and image-container).

Example
```handlebars
{{stateful-img src=urlHostedOnImgix imgixParams='w=90&fit=crop&crop=faces&q=70' forceDpr=false}}
```

For additional usage instructions visit [ember-cli-image's usage](https://github.com/bustlelabs/ember-cli-image#usage).



## Contributing
Fork the repository, create a feature-branch and send in a pull request.

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
