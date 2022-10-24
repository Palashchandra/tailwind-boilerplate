$(".cre_slider").each(function () {
    var swiperJs = $(this),
    perpage = ($(this).attr("id"), $(this).data("perpage") || 1),
    loop = $(this).data("loop"),
    speed = $(this).data("speed") || 1000,
    space = $(this).data("space") || 0,
    effect = $(this).data("effect"),
    center = $(this).data("center"),
        pl = $(this).data("autoplay"),
        nex = $(this).data("next"),
        pre = $(this).data("prev"),
        pag = $(this).data("pagination"),
        mous = $(this).data("mousewheel"),
        pagtype = $(this).data("paginationtype"),
        direction = $(this).data("direction") || "horizontal",
        cfr = $(this).data("rotate"),
        cfs = $(this).data("stretch"),
        cfd = $(this).data("depth"),
        lops = $(this).data("loopslides"),
        scol = $(this).data("slidescolumn"),
        breakpoints = $(this).data("breakpoints");
    new Swiper(swiperJs, {
        slidesPerView: perpage,
        direction: direction,
        spaceBetween: space,
        loop: loop,
        speed: speed,
        effect: effect,
        breakpoints: breakpoints,
        centeredSlides: center,
        mousewheel: mous,
        slidesPerColumn: scol,
        slideToClickedSlide: true,
        loopedSlides: lops,
        autoplay: pl,
        coverflowEffect: {
            rotate: cfr,
            stretch: cfs,
            depth: cfd,
            modifier: 1,
            slideShadows: false,
        },
        pagination: {
            el: pag,
            type: pagtype,
            clickable: !0
        },
        navigation: {
            nextEl: nex,
            prevEl: pre
        }
    })
})