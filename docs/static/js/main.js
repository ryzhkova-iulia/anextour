function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {lat: 55.763383, lng: 37.618743}
    });

    var currWindow =false;

    function putPointToMap(point) {

        var balloonHtml = '<div class="tooltip">'+
                '<img src="./static/img/general/page-1.svg">'+
                '<a href="tel:' + point.phone + '" class="footer_tel">' + point.phone + '</a>' +
                '<div class="tooltip__info">' + point.info + '</div>' +
                '<button class="btn btn_form js-callback">Обратный звонок</button>' +
            '</div>';

        var infoWindow = new google.maps.InfoWindow({
            content: balloonHtml
        });

        new google.maps.Marker({
            position: points[i].position,
            map: map,
            icon : "./static/img/general/point.png"
        }).addListener('click', function() {
            if( currWindow ) {
                currWindow.close();
            }
            currWindow = infoWindow;
            infoWindow.open(map, this);
        });

    }

    var points = [
        {
            phone: "+7 (925) 090-86-09",
            info: "<span>ул. Профсоюзная, д. 104</span>" + "<span>Беляево, Калужская, Коньково</span>" + "<span>Пн-Вс: 10:00-22:00</span>",
            position: {lat: 55.661749, lng: 37.545636}
        },
        {
            phone: "+7 (985) 763-96-14",
            info: "<span>ул. Профсоюзная, д. 102 стр 1. ТЦ «Ареал»</span>" +  "<span>Беляево, Калужская</span>" + "<span>Пн-Вс: 10:00-22:00</span>",
            position: {lat: 55.643817, lng: 37.526334}
        },
        {
            phone: "+7 (499) 550-88-76",
            info: "<span>ул. Миклухо-Маклая , д 36 А, торговый центр МЦ. Отдельный вход с улицы рядом с аптекой, 2 й этаж</span>"  + "<span>Коньково, Беляево</span>" + "<span>Пн-Вс: 10:00-22:00</span>",
            position: {lat: 55.639669, lng: 37.534499}
        },
        {
            phone: "+7 (495) 669-33-21",
            info: "<span>ул. Профсоюзная, д. 12 ТЦ «Олиан»</span>" + "<span>Академическая, Профсоюзная, Октябрьская</span>" + "<span>Пн-Сб: 10:00-21:00, Вс: 10:00-20:00</span>",
            position: {lat: 55.667955, lng: 37.552238}
        },
        {
            phone: "+7 (929) 661-43-41",
            info: "<span>Комсомольский проспект д. 4 ТЦ</span>" + "<span>Фрунзенская, Парк Культуры</span>" + "<span>Пн-Вс: 10:00-22:00</span>",
            position: {lat: 55.733074, lng: 37.592294}
        },
        {
            phone: "+7 (495) 162-56-07",
            info: "<span>Зубовский б-р, д.13 стр 1</span>" +  "<span>Парк Культуры, Фрунзенская, Октябрьская</span>" + "<span>Пн-Пт: 10:00-20:00 Сб: 11:00-16-00</span>",
            position: {lat: 55.735727, lng: 37.592196}
        }
    ];

    for (var i = 0; i < points.length; i++) {
        putPointToMap(points[i]);
    }


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


    $( document ).on( 'click', '.js-callback', function(e) {
        $( '.js-callback' ).magnificPopup({
            items: {
                src: '#popup',
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
        }).magnificPopup('open');
        e.preventDefault();
    });




    $('.js-sent').magnificPopup({
        items: {
            src: '#sucess',
            type: 'inline'
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