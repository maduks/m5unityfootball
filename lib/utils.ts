export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function initWOW() {
  if (typeof window !== 'undefined' && (window as any).WOW) {
    new (window as any).WOW().init()
  }
}

export function initMagnificPopup() {
  if (typeof window !== 'undefined' && (window as any).jQuery) {
    const $ = (window as any).jQuery
    if ($.fn.magnificPopup) {
      // Initialize popup video
      $('.popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,
      })
      // Initialize gallery
      $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
          verticalFit: true,
        },
        gallery: {
          enabled: true,
        },
        zoom: {
          enabled: true,
          duration: 300,
          opener: function (element: any) {
            return element.find('img')
          },
        },
      })
    }
  }
}




