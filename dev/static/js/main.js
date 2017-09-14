
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 55.763383, lng: 37.618743}
    });

    new google.maps.Marker({
        position: {lat: 55.641860, lng: 37.523489},
        map: map,
        icon : "./static/img/general/point.png"
    });

    new google.maps.Marker({
        position: {lat: 55.643896, lng: 37.526313},
        map: map,
        icon : "./static/img/general/point.png"
    });

    new google.maps.Marker({
        position: {lat: 55.634722, lng: 37.507164},
        map: map,
        icon : "./static/img/general/point.png"
    });

    new google.maps.Marker({
        position: {lat: 55.676946, lng: 37.543212},
        map: map,
        icon : "./static/img/general/point.png"
    });
    new google.maps.Marker({
        position: {lat: 55.727053, lng: 37.571365},
        map: map,
        icon : "./static/img/general/point.png"
    });
    new google.maps.Marker({
        position: {lat: 55.736235, lng: 37.589904},
        map: map,
        icon : "./static/img/general/point.png"
    });
}


$(document).ready(function () {
    $('.js__pop-callback').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        },

        callbacks: {
            elementParse: function(item) {

                var mp = $.magnificPopup.instance,
                    cur = mp.st.el,
                    title = cur.attr('data-header'),
                    curImg = cur.attr("src");

                if (curImg != undefined ) {
                    $( item.src).find('.form-image').attr("src", curImg);
                } else {
                    // $( item.src).find('.form-image').hide();
                }
                $( item.src).find('.title_form').text(title);
            }
        }
    });


    // begin | маска формы с телефоном
    $('[name="phone"]').mask("+7 (999) 999-99-99", {
        placeholder: "_"
    });


    // якорь
    $(function() {
        $('.menu li a, .info__link').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});




// kalendar

$(function() {


    var pmuLocale = {
        days		: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        daysShort	: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'],
        daysMin		: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        months		: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
        monthsShort	: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    }
    $('.pickmeup-date').pickmeup({
        mode            : 'range',
        position		: 'bottom',
        hide_on_select	: true,
        default_date	: false,
        min             : new Date,
        calendars       : 2,
        locale          : pmuLocale,
        format			: 'd B'
    });






    $(".open__coll").click(function() {
        $(this).closest('div').find('input').pickmeup('show');
    });


// form count
    $(".nomber").each(function( ){
        var col = $(this).find('input').val();
        var plus = $(this).find('.plus');
        var col_nomber = $(this).find('input');
        var minus = $(this).find('.minus');

        $(plus).click(function() {
            col++;
            col_nomber.val(col);
        });

        $(minus).click(function() {
            var min_value = ($(this).data('min') ? $(this).data('min') : 0);

            if(col > min_value){
                col--;
                col_nomber.val(col);
            }
        });
    });




});


// paralax
$( document ).ready(function() {
    $('.top-image').parallax({imageSrc: './static/img/general/top-bg.jpg'});
});