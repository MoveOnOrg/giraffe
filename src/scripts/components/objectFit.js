export default {

  init() {

    if ( ! Modernizr.objectfit ) {
      $('.img-container').each(function () {
        let $container = $(this);
        const imgUrl = $container.find('img').prop('src');
        if (imgUrl) {
          $container
            .css('backgroundImage', 'url(' + imgUrl + ')')
            .addClass('compat-object-fit');
        }
      });
    }

  }

}