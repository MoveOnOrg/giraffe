class Navigation {

  constructor() {
    this.$nav = $('.mo-nav');
    this.$navToggle = $('.mo-nav__toggle');
    this.$navClose = $('.mo-nav__close');
    this.$dropdown = this.$nav.find('.mo-nav__dropdown');
    this.$secondaryLinks = $('.mo-nav__secondary a');
  }

  init() {
    let _this = this;
    this.$navToggle.on("click", function (e) {
      e.preventDefault();
      _this.$nav.toggleClass('nav--visible');
    });
    this.$navClose.on("click", function (e) {
      e.preventDefault();
      _this.$nav.removeClass('nav--visible');
    });
    this.$dropdown.each(function () {
      let $dropdown = $(this);
      $dropdown.children('a').on("click", function (e) {
        e.preventDefault();
        $dropdown.toggleClass('nav__dropdown--expanded')
      });
    });
    this.$secondaryLinks.each(function () {
        let $secondaryLink = $(this);
        $secondaryLink.on("click", function (e) {
            e.preventDefault();
            _this.$nav.toggleClass('nav--visible');
            window.location.href = $secondaryLink.attr('href');
        });

    });
  }
}

export default (new Navigation);
