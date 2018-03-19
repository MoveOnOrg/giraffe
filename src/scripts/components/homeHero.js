class HomeHero {

  constructor($element) {
    this.$element = $($element);
    this.$imageCarousel = this.$element.find('.home-hero__image-carousel');
    this.$contentCarousel = this.$element.find('.home-hero__content__carousel');

    this.bindCarousels();
  }


  bindCarousels() {
    let _this = this;
    this.$contentCarousel.on('ready.flickity', function() {
        if (_this.$contentCarousel.find('.home-hero__text').first().hasClass('home-hero-bg-red')) {

            _this.$contentCarousel.parent().addClass('home-hero-bg-red');
        }
    });
    this.$contentCarousel.flickity({
      adaptiveHeight: true,
      wrapAround: true,
    })
    .on('select.flickity', function () {
      let _flickityData = _this.$contentCarousel.data('flickity');
      _this.$contentCarousel.parent().removeClass('home-hero-bg-red');
       if ($(_flickityData.selectedElement).hasClass('home-hero-bg-red')) {
           _this.$contentCarousel.parent().addClass('home-hero-bg-red');
        }
    });
    this.$imageCarousel.flickity({
      sync: this.$contentCarousel[0],
      wrapAround: true,
    });
  }



}



export default {

  init() {

    let $elements = $('.home-hero');

    $elements.each(function (index, element) {
      let _homeHero = new HomeHero(element);
    });

  }

}
