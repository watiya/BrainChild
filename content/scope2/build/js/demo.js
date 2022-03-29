"use strict";

// comments answer
$('.comments__reply').on('click', function () {
  $(this).toggleClass('active');
  $(this).parents('.comments__control').next().slideToggle();
});
$('.answer__button:nth-child(2)').on('click', function () {
  $(this).parents('.answer').prev().find('.comments__reply').removeClass('active');
  $(this).parents('.answer').slideUp();
  $(this).parents('.answer').find('.answer__textarea').val('');
});
$('.answer__textarea').keyup(function () {
  $('.answer__button').removeClass('disabled');
}); // login

$('.login__fieldset .login__button').on('click', function () {
  $('.login__entry').hide();
  $('.login__code').show();
}); // header

$('.header__body .actions__option:first-child').on('click', function () {
  $(this).parents('.actions').removeClass('active');
  $('.header__message, .header__notification').removeClass('new');
});
$('.header__body .actions__option:nth-child(2)').on('click', function () {
  $(this).parents('.actions').removeClass('active');
  $('.header__message').hide();
  $('.header__notification').hide();
}); // tabs

$('.activity__link').on('click', function () {
  $('.activity__link').removeClass('active');
  $(this).addClass('active');
});
$('.card__link').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.card__nav').find('.card__link').removeClass('active');
  $(this).addClass('active');
});
$('.messages__link').on('click', function (e) {
  e.preventDefault();
  $('.messages__link').removeClass('active');
  $(this).addClass('active');
});
$('.creators__link').on('click', function (e) {
  e.preventDefault();
  $('.creators__link').removeClass('active');
  $(this).addClass('active');
}); // products dashboard table

(function () {
  $('.products__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.products__table').find('.products__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.products__table').find('.products__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
  $('.statistics__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.statistics__table').find('.statistics__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.statistics__table').find('.statistics__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
})(); // drafts


(function () {
  $('.schedule__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.schedule__table').find('.schedule__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.schedule__table').find('.schedule__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
})(); // released and scheduled


(function () {
  $('.released__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.released__table').find('.released__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.released__table').find('.released__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
})(); // recall


(function () {
  $('.recall__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.recall__table').find('.recall__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.recall__table').find('.recall__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
})(); // customer


(function () {
  $('.customer__row:first-child .checkbox__input').on('click', function () {
    if ($(this).is(':checked')) {
      $(this).parents('.customer__table').find('.customer__row .checkbox__input').prop('checked', true).attr('checked', 'checked');
    } else {
      $(this).parents('.customer__table').find('.customer__row .checkbox__input').prop('checked', false).removeAttr('checked');
    }
  });
})(); // filters reset


$('.filters__btns .filters__button:first-child').on('click', function () {
  $('.filters .form__input').val('');
  $('.select').find('option').attr("selected", false);
  $('.select').find('option:first-child').attr("selected", true);
  $('.select').niceSelect('update');
  $('.js-slider')[0].noUiSlider.reset();
  $('.filters__list .checkbox .checkbox__input').each(function () {
    $(this).prop('checked', false).removeAttr('checked');
  });
}); // notifications

$('.notification .actions__option:first-child').on('click', function () {
  $(this).parents('.actions').removeClass('active');
  $('.notification__item').removeClass('new');
});

(function () {
  $('.notification__btns .notification__button:first-child').on('click', function () {
    $('.notification__filters .checkbox__input').prop('checked', true).attr('checked', 'checked');
  });
  $('.notification__btns .notification__button:nth-child(2)').on('click', function () {
    $('.notification__filters .checkbox__input').prop('checked', false).removeAttr('checked');
  });
})(); // message center


$('.messenger .actions__option:first-child').on('click', function () {
  $(this).parents('.actions').removeClass('active');
  $('.messages__item').removeClass('new');
}); // registration

$(document).ready(function () {
  if (window.location.hash) {
    var hash = window.location.hash;
    $('[data-id="' + hash + '"]').removeClass('unauthorized');
  }
});
$('.header__item_user .header__link:last-child').on('click', function (e) {
  e.preventDefault();
  $('.header').addClass('unauthorized');
});