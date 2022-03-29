"use strict";

// check if touch device
function isTouchDevice() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }

  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}

if (isTouchDevice()) {
  $('body').addClass('touch-device');
} // header


(function () {
  var header = $('.header'),
      items = header.find('.header__item'),
      burger = header.find('.header__burger'),
      searchOpen = header.find('.header__search'),
      sidebar = $('.sidebar'),
      search = $('.search');
  items.each(function () {
    var item = $(this),
        head = item.find('.header__head'),
        body = item.find('.header__body');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }

      searchOpen.removeClass('active');
      search.removeClass('visible');
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
  burger.on('click', function (e) {
    e.stopPropagation();
    sidebar.toggleClass('visible');
    $('html, body').toggleClass('no-scroll');
  });
})(); // search


(function () {
  var search = $('.search'),
      close = $('.search__close'),
      input = $('.search__input'),
      remove = $('.search__remove'),
      open = $('.header__search');
  input.keyup(function () {
    search.addClass('active');
  });
  close.on('click', function () {
    search.removeClass('active');
    input.val('');
  });
  remove.on('click', function () {
    $(this).parents('.search__item').hide();
  });
  open.on('click', function () {
    open.toggleClass('active');
    search.toggleClass('visible');
  });
})(); // sidebar


(function () {
  var sidebar = $('.sidebar'),
      items = sidebar.find('.sidebar__item_dropdown'),
      toggle = sidebar.find('.sidebar__toggle'),
      sidebarOverlay = sidebar.next(),
      helpOpen = sidebar.find('.sidebar__help'),
      close = sidebar.find('.sidebar__close'),
      search = $('.search'),
      theme = $('.theme'),
      help = $('.help'),
      helpOverlay = help.next(),
      helpClose = help.find('.help__close');
  items.each(function () {
    var item = $(this),
        head = item.find('.sidebar__head'),
        body = item.find('.sidebar__body');
    head.on('click', function (e) {
      e.stopPropagation();
      item.toggleClass('active');
      sidebar.addClass('active');
      sidebarOverlay.addClass('active');
      items.addClass('wide');
      theme.addClass('wide');
    });
  });
  toggle.on('click', function () {
    sidebar.toggleClass('active');
    sidebarOverlay.toggleClass('active');
    items.toggleClass('wide');
    theme.toggleClass('wide');
  });
  sidebarOverlay.on('click', function () {
    sidebar.removeClass('active');
    sidebarOverlay.removeClass('active');
    items.removeClass('wide');
    theme.removeClass('wide');
  });
  close.on('click', function () {
    sidebar.removeClass('visible');
  });
  helpOpen.on('click', function () {
    help.addClass('active');
    helpOverlay.addClass('active');
  });
  helpOverlay.on('click', function () {
    help.removeClass('active');
    helpOverlay.removeClass('active');
  });
  helpClose.on('click', function () {
    help.removeClass('active');
    helpOverlay.removeClass('active');
  });
})(); // actions


(function () {
  var actions = $('.actions');
  actions.each(function () {
    var action = $(this),
        button = action.find('.actions__button'),
        body = action.find('.actions__body');
    button.on('click', function (e) {
      e.stopPropagation();

      if (!action.hasClass('active')) {
        actions.removeClass('active');
        action.addClass('active');
      } else {
        actions.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      actions.removeClass('active');
    });
  });
})(); // height windows for ios


var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px")); // toggle body theme

(function () {
  var switchTheme = $('.js-theme'),
      body = $('body');
  switchTheme.on('change', function () {
    if (!body.hasClass('dark')) {
      body.addClass('dark');
      localStorage.setItem('darkMode', "on");
    } else {
      body.removeClass('dark');
      localStorage.setItem('darkMode', "off");
    }
  });
})(); // nice select


$(document).ready(function () {
  $('.select').niceSelect();
}); // tooltip

$(document).ready(function () {
  var tooltip = $('.tooltip'),
      position = tooltip.data('position');

  if (!isTouchDevice()) {
    $('.tooltip').tooltipster({
      delay: 0,
      position: position
    });
  }

  if (isTouchDevice()) {
    $('.tooltip').tooltipster({
      delay: 0,
      position: position,
      trigger: 'click'
    });
  }
}); // tabs

(function () {
  var tabs = $('.js-tabs');
  tabs.each(function () {
    var thisTabs = $(this),
        nav = thisTabs.find('.js-tabs-link'),
        option = thisTabs.find('.option'),
        item = thisTabs.find('.js-tabs-item');
    nav.on('click', function () {
      var thisNav = $(this),
          indexNav = thisNav.index();
      nav.removeClass('active');
      thisNav.addClass('active');
      item.hide();
      item.eq(indexNav).fadeIn();
      return false;
    }).first().trigger('click');
  });
  $(document).ready(function () {
    var option = $('.js-tabs-select .option');
    option.on('click', function () {
      var thisOption = $(this),
          indexOption = thisOption.index();
      $('.js-tabs-item').hide();
      $('.js-tabs-item').eq(indexOption).fadeIn();
      initSlider($('.js-tabs-item').eq(indexOption));
    });
  });
})(); // favorite


$('.favorite, .comments__favorite').on('click', function () {
  $(this).toggleClass('active');
}); // get scrollbar width

function getScrollBarWidth() {
  var outer = $('<div>').css({
    visibility: 'hidden',
    width: 100,
    overflow: 'scroll'
  }).appendTo('body'),
      widthWithScroll = $('<div>').css({
    width: '100%'
  }).appendTo(outer).outerWidth();
  outer.remove();
  return 100 - widthWithScroll;
}

; // showPopup

function showPopup(el) {
  var body = $('body');
  body.addClass('no-scroll');
  body.css('padding-right', getScrollBarWidth());

  if (el) {
    el.addClass('animation');
    setTimeout(function () {
      el.addClass('visible');
    }, 10);
  }
} // popup


(function () {
  var body = $('body'),
      wrap = $('.js-popup-wrap'),
      overlay = $('.js-popup-overlay'),
      close = $('.js-popup-close');
  var el;
  $('[data-popup]').on('click', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var _this = $(this),
        data = _this.data('popup');

    el = $(data);
    showPopup(el);
  });
  close.on('click', function (e) {
    var _thisClose = $(this);

    el = _thisClose.parents('.js-popup');
    e.preventDefault();
    hidePopup();
  });
  overlay.on('click', function () {
    var _thisOverlay = $(this);

    el = _thisOverlay.parents('.js-popup');
    hidePopup();
  });
  $(document).keyup(function (e) {
    if (e.keyCode === 27) hidePopup();
  });

  function hidePopup() {
    if (el) {
      el.removeClass('animation');

      if ($('.js-popup.visible').length == 1) {
        body.removeClass('no-scroll');
        body.css('padding-right', 0);
      }

      setTimeout(function () {
        el.removeClass('visible');
      }, 300);
    }
  }
})(); // global variables


var prevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M4.909.265a1 1 0 0 0-1.413.057l-3.231 3.5a1 1 0 0 0 0 1.357l3.231 3.5a1 1 0 0 0 1.47-1.357L3.284 5.5H13a1 1 0 1 0 0-2H3.284l1.682-1.822A1 1 0 0 0 4.909.265z" fill="#777e91"/></svg></button>',
    nextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" fill="none" viewBox="0 0 14 9"><path fill-rule="evenodd" d="M9.091.265a1 1 0 0 1 1.413.057l3.231 3.5a1 1 0 0 1 0 1.357l-3.231 3.5a1 1 0 0 1-1.47-1.357L10.716 5.5H1a1 1 0 1 1 0-2h9.716L9.034 1.678A1 1 0 0 1 9.091.265z" fill="#23262f"/></svg></button>';
$(document).ready(function () {
  // slider hit
  $('.js-slider-hit').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: prevArrow,
    nextArrow: nextArrow,
    dots: false,
    infinite: false,
    speed: 500,
    responsive: [{
      breakpoint: 1023,
      settings: {
        slidesToShow: 2
      }
    }]
  });
}); // editor text

(function () {
  var editor = $('.js-editor');
  editor.each(function () {
    $(this).richText({
      // text alignment
      leftAlign: false,
      centerAlign: true,
      rightAlign: false,
      justify: false,
      // lists
      ol: false,
      ul: true,
      // title
      heading: false,
      // fonts
      fonts: false,
      fontColor: false,
      fontSize: false,
      // uploads
      imageUpload: false,
      fileUpload: false,
      // media
      videoEmbed: false,
      // tables
      table: false,
      // code
      removeStyles: false,
      code: false
    });
  });
})(); // product


(function () {
  var product = $('.js-product'),
      open = product.find('.js-product-open'),
      comments = product.find('.js-product-comments'),
      close = product.find('.js-comments-close');
  open.on('click', function () {
    product.removeClass('active');
    $(this).addClass('active');
    comments.removeClass('active');
  });
  comments.on('click', function () {
    $(this).addClass('active');
    product.addClass('active');
    open.removeClass('active');
  });
  close.on('click', function () {
    product.removeClass('active');
    open.addClass('active');
    comments.removeClass('active');
  });
})(); // fancybox


$('[data-fancybox]').fancybox({
  buttons: ['share', 'download', 'fullScreen', 'close']
}); // products

$('.products__row, .statistics__row').mouseleave(function () {
  $(this).find('.actions').removeClass('active');
}); // preview new product

(function () {
  var preview = $('.js-preview'),
      open = $('.js-preview-open'),
      close = $('.js-preview-close');
  open.on('click', function () {
    preview.addClass('visible');
  });
  close.on('click', function () {
    preview.removeClass('visible');
  });
})(); // tags


$('[name=tags]').tagify(); // product checked

$('.summary .checkbox__input').on('change', function () {
  if ($(this).prop('checked')) {
    $(this).parents('.summary').addClass('active');
  } else {
    $(this).parents('.summary').removeClass('active');
  }
}); // calendar

(function () {
  var calendar = $('.js-calendar'),
      items = calendar.find('.js-calendar-item'),
      time = calendar.find('.js-calendar-time li'),
      title = calendar.find('.js-calendar-title'),
      value = calendar.find('.js-calendar-value');
  items.each(function () {
    var item = $(this),
        head = item.find('.js-calendar-head'),
        body = item.find('.js-calendar-body'),
        close = item.find('.js-calendar-close');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!item.hasClass('active')) {
        items.removeClass('active');
        item.addClass('active');
      } else {
        items.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    close.on('click', function (e) {
      items.removeClass('active');
    });
    $('html, body').on('click', function () {
      items.removeClass('active');
    });
  });
  time.each(function () {
    var _this = $(this);

    if (_this.hasClass('active')) {
      var textTime = _this.text();

      title.text(textTime);
      value.text(textTime);
    }

    _this.on('click', function () {
      if (!_this.hasClass('active')) {
        time.removeClass('active');

        _this.addClass('active');
      } else {
        time.removeClass('active');
      }

      var textTime = _this.text();

      title.text(textTime);
      value.text(textTime);
    });
  });
})(); // dateRangePicker


(function () {
  var dateRange = $('.js-date-range');

  if (dateRange.length) {
    dateRange.each(function () {
      var _this = $(this),
          single = _this.data('single-month'),
          container = _this.data('container'),
          clear = $('.js-date-clear');

      _this.dateRangePicker({
        inline: true,
        autoClose: true,
        format: 'DD MMMM, YYYY',
        separator: ' - ',
        showShortcuts: false,
        container: container,
        singleDate: true,
        singleMonth: single,
        showTopbar: false,
        stickyMonths: true,
        hoveringTooltip: false,
        alwaysOpen: true,
        customArrowPrevSymbol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M14.207 7.793a1 1 0 0 1 0 1.414L11.414 12l2.793 2.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0z" fill="#777e91"/></svg>',
        customArrowNextSymbol: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M9.793 7.793a1 1 0 0 0 0 1.414L12.586 12l-2.793 2.793a1 1 0 0 0 1.414 1.414l3.5-3.5a1 1 0 0 0 0-1.414l-3.5-3.5a1 1 0 0 0-1.414 0z" fill="#777e91"/></svg>',
        setValue: function setValue(s) {
          if ($(this).attr('readonly')) {
            $(this).val(s);
          } else {
            $(this).val(s);
          }
        }
      });

      _this.data('dateRangePicker').setStart('2022-01-20');

      clear.on('click', function () {
        _this.data('dateRangePicker').setStart(new Date());
      });
    });
  }
})(); // smile


(function () {
  var smiles = $('.smile');
  smiles.each(function () {
    var smile = $(this),
        head = smile.find('.smile__head'),
        body = smile.find('.smile__body');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!smile.hasClass('active')) {
        smiles.removeClass('active');
        smile.addClass('active');
      } else {
        smiles.removeClass('active');
      }
    });
    body.on('click', function (e) {
      e.stopPropagation();
    });
    $('html, body').on('click', function () {
      smiles.removeClass('active');
    });
  });
})(); // comments page


(function () {
  var recall = $('.recall'),
      rows = recall.find('.recall__row');
  rows.each(function () {
    var row = $(this),
        repeat = row.find('.recall__control .recall__button:first-child'),
        close = row.find('.answer__btns .answer__button:last-child'),
        smile = row.find('.smile');
    repeat.on('click', function () {
      row.addClass('active');
    });
    close.on('click', function () {
      row.removeClass('active');
    });
    row.mouseleave(function () {
      smile.removeClass('active');
    });
  });
})(); // customer


(function () {
  var customer = $('.customer'),
      rows = $('.customer__row'),
      close = $('.details__close');
  rows.each(function () {
    var row = $(this),
        item = row.find('.customer__item');
    item.on('click', function () {
      customer.addClass('active');

      if (!row.hasClass('active')) {
        rows.removeClass('active');
        row.addClass('active');
      } else {
        rows.removeClass('active');
      }
    });
    close.on('click', function () {
      customer.removeClass('active');
      row.removeClass('active');
    });
  });
})(); // filters


(function () {
  var filters = $('.filters');
  filters.each(function () {
    var filter = $(this),
        head = filter.find('.filters__head'),
        body = filter.find('.filters__body'),
        overlay = filter.find('.filters__overlay'),
        close = filter.find('.filters__close');
    head.on('click', function (e) {
      e.stopPropagation();

      if (!filter.hasClass('active')) {
        filters.removeClass('active');
        filter.addClass('active');
      } else {
        filters.removeClass('active');
      }
    });
    close.on('click', function () {
      filters.removeClass('active');
    });
    overlay.on('click', function () {
      filters.removeClass('active');
    });
  });
})(); // slider


(function () {
  var slider = $('.js-slider');

  if (slider.length) {
    slider.each(function () {
      var _this = $(this),
          min = _this.data('min'),
          max = _this.data('max'),
          start = _this.data('start'),
          end = _this.data('end'),
          step = _this.data('step'),
          tooltips = _this.data('tooltips'),
          prefix = _this.data('prefix');

      var optionStart = [start],
          optionConnect = [true, false],
          optionTooltips = false;

      if (end) {
        optionStart = [start, end];
        optionConnect = true;
      }

      if (tooltips) {
        optionTooltips = [true];

        if (end) {
          optionTooltips = [true, true];
        }
      }

      noUiSlider.create(_this[0], {
        start: optionStart,
        connect: optionConnect,
        step: step,
        tooltips: optionTooltips,
        range: {
          'min': min,
          'max': max
        },
        format: wNumb({
          decimals: 0,
          prefix: prefix
        })
      });
    });
  }
})(); // notification


(function () {
  var notification = $('.notification'),
      items = notification.find('.notification__item');
  items.each(function () {
    var item = $(this),
        like = item.find('.notification__control .notification__action:nth-child(1)'),
        reply = item.find('.notification__control .notification__action:nth-child(2)'),
        cancel = item.find('.answer__btns .answer__button:nth-child(2)'),
        answer = item.find('.answer');
    like.on('click', function () {
      like.toggleClass('active');
    });
    reply.on('click', function () {
      answer.slideDown();
    });
    cancel.on('click', function () {
      answer.slideUp();
    });
  });
})(); // settings


(function () {
  var settings = $('.settings'),
      link = $('.settings__link'),
      item = $('.settings__item');
  link.on('click', function (e) {
    e.preventDefault();

    var _this = $(this),
        id = _this.attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({
      scrollTop: top
    }, 1000);
    link.removeClass('active');

    _this.addClass('active');
  });
  $(document).ready(function () {
    var option = $('.settings .select .option');
    option.on('click', function () {
      var thisOption = $(this),
          indexOption = thisOption.index(),
          top = item.eq(indexOption).find('.settings__anchor').offset().top;
      ;
      console.log(indexOption);
      $('body,html').animate({
        scrollTop: top
      }, 1000);
    });
  });
})(); // faq


(function () {
  var item = $('.faq__item'),
      head = item.find('.faq__head'),
      body = item.find('.faq__body');
  head.on('click', function () {
    var thisHead = $(this);
    thisHead.parents('.faq__item').toggleClass('active');
    thisHead.parents('.faq__item').find('.faq__body').slideToggle();
  });
})(); // messages


(function () {
  var messages = $('.messages'),
      users = messages.find('.messages__item'),
      close = messages.find('.messenger__close');
  users.each(function () {
    var user = $(this);
    user.on('click', function () {
      messages.addClass('active');

      if (!user.hasClass('active')) {
        users.removeClass('active');
        user.addClass('active');
      } else {
        users.removeClass('active');
      }
    });
    close.on('click', function () {
      messages.removeClass('active');
    });
  });
})(); // creators


$('.creators__button:first-child').on('click', function () {
  $(this).toggleClass('active');
}); // follower

$('.follower__button_follow').on('click', function () {
  $(this).toggleClass('active');
});