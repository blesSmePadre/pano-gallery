const createGallery = (imagesUrl) => {
		
		const getURLParameter = (param) => {
		    var url = window.location.search.substring(1);
		    var urlVariables = url.split('&');
		    for (var i = 0; i < urlVariables.length; i++) {
		    	var _param = urlVariables[i].split('=');
		    	if (_param[0] == param)
            return _param[1];
		    }
		}

		const isGalleryInFullScreenMode = () => {
      return $('.lg-outer').hasClass('lg-fullscreen-on');
    }

    const panoramaShow = () => {
      if(isGalleryInFullScreenMode())
        $('.panorama-fullscreen').toggleClass('panorama-fullscreen-active');
      	$('#panorama').css({'z-index':'1065'});
				$('#panorama').animate({
	  			'opacity': 1
	      	 }, {
	      	 	duration: 1000
	      	 }   	 
		  	);
    }

    const panoramaHide = () => {
      $('#panorama').animate({
	  			'opacity': 0
	      	 }, {
	      	 	duration: 1000,
	      	 	complete: function() {
      	 			$(this).css({'z-index':'1045'})
	      	 	}   	
	      	 }  	  
		  	);
    }

    const drawCircleButton = (element) => {
    	if (!element)
    		return;
    	var mainCanvas = element;
		 	var mainContext = mainCanvas.getContext('2d');
	 		var canvasHeight = mainCanvas.height;
	 		var canvasWidth = mainCanvas.width;
	 		var center = [canvasHeight/2, canvasWidth/2];
			mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

				/* first */
	 		var radius = 45;
	 		mainContext.beginPath();
	 		mainContext.arc(center[0], center[1], radius, 0, Math.PI * 2, false);
	 		mainContext.strokeStyle = "#ffffff";
	 		mainContext.lineWidth = 5;
	 		mainContext.stroke();
	 		mainContext.closePath();
	 		/* first */

	 		/*second*/
			mainContext.beginPath();
	 		var radius = 30;
	 		mainContext.arc(center[0], center[1], radius, 0, Math.PI * 2, false);
	 		mainContext.closePath();
	 		mainContext.strokeStyle = "#ffffff";
	 		mainContext.lineWidth = 3;
	 		mainContext.stroke();
	 		mainContext.closePath();
	 		/*second*/

	 		/*third*/
			mainContext.beginPath();
	 		var radius = 15;
	 		mainContext.arc(center[0], center[1], radius, 0, Math.PI * 2, false);
	 		mainContext.closePath();
	 		mainContext.strokeStyle = "#ffffff";
	 		mainContext.lineWidth = 3;
	 		mainContext.stroke();
	 		mainContext.closePath();
	 		/*third*/

	 		/*last*/
			mainContext.beginPath();
	 		var radius = 5;
	 		mainContext.arc(center[0], center[1], radius, 0, Math.PI * 2, false);
	 		mainContext.closePath();
	 		mainContext.fillStyle = "#ffffff";
	 		mainContext.fill();
	 		mainContext.closePath();
	 		/*last*/
    }
    /*
    <a href="${pathsArray[3]}"
      data-sub-html="<div class='panorama-button-in-container' id='panorama-button-in'>
        <span class='panorama-button-in-circle'><span><span></span></span></span>
        <span class='panorama-button-title' data-element-translate-key='panorama-button-in'/>
      </div>"
      data-panorama-src="${pathsArray[4]}">
      <img src="${pathsArray[3]}" />
    </a>
    */
    const createInitialGalleryMarkup = (pathsArray) => {
    	return `<div id="lightgallery">
		    <a href="${pathsArray[0]}">
		      <img src="${pathsArray[0]}" />
		    </a>
		    <a href="${pathsArray[1]}">
		      <img src="${pathsArray[1]}" />
		    </a>
		    <a href="${pathsArray[2]}">
		      <img src="${pathsArray[2]}" />
		    </a>
		    <a href="${pathsArray[3]}"
		      data-sub-html="<div class='panorama-button panorama-button-in'>
		      		<canvas id='circleButtonIn' height='100' width='100'></canvas>
		      		<span class='panorama-button-title' data-element-translate-key='panorama-button-in'></span>
		      	</div>"
		      data-panorama-src="${pathsArray[4]}">
		      <img src="${pathsArray[3]}" />
		    </a>
		    <a href="${pathsArray[5]}">
		      <img src="${pathsArray[5]}" />
		    </a>
		    <a href="${pathsArray[6]}">
		      <img src="${pathsArray[6]}" />
		    </a>
		    <a href="${pathsArray[7]}">
		      <img src="${pathsArray[7]}" />
		    </a>
		    <a href="${pathsArray[8]}">
		      <img src="${pathsArray[8]}" />
		    </a>
		  </div>`
    }

    const changeElementsTextLanguage = (currentLanguage, elementTranslateKey) => {
	  	$('[data-element-translate-key]').each((i, element) => {
	    let $element = $(element);
	    $element.text(dictionary[currentLanguage][$element.data('elementTranslateKey')]);
	  });
	}

	const dictionary = {
	  en:  {
	    'panorama-button-in' : 'Enter',
	    'panorama-button-out' : 'Exit'
	  },
	  ru: {
	    'panorama-button-in' : 'Вход',
	    'panorama-button-out' : 'Выход'
	  },
	  de: {
	    'panorama-button-in' : 'Eingang',
	    'panorama-button-out' : 'Ausgang'
	  },
	  hu: {
	    'panorama-button-in' : 'Belépés',
	    'panorama-button-out' : 'Kilépés'
	  },
	  fr: {
	    'panorama-button-in' : 'Entrée',
	    'panorama-button-out' : 'Sortie'
	  },
	  nl: {
	    'panorama-button-in' : 'Naar binnenzijde',
	    'panorama-button-out' : 'Naar buitenzijde'
	  },
	  dk: {
	    'panorama-button-in' : 'Kom ind',
	    'panorama-button-out' : 'Kom ud'
	  },
	  pt: {
	    'panorama-button-in' : 'Entrar',
	    'panorama-button-out' : 'Sair'
	  },
	  es: {
	    'panorama-button-in' : 'Entrar',
	    'panorama-button-out' : 'Salir'
	  },
	  ro: {
	    'panorama-button-in' : 'Intrare',
	    'panorama-button-out' : 'Iesire'
	  }
	}

	const getGalleryThumbPannel = (paths) => {
	  return `<div class="gallery-thumbpanel">
	            <div class="gallery-thumbsgroup">
	              <div class="gallery-thumbitem" data-slide-number="0">
	                <img src="${paths[0]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="1">
	                <img src="${paths[1]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="2">
	                <img src="${paths[2]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="3">
	                <img src="${paths[3]}"/>
	              </div>
	              <div class="gallery-thumbitem panorama-item">
	                <img src="${paths[4]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="4">
	                <img src="${paths[5]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="5">
	                <img src="${paths[6]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="6">
	                <img src="${paths[7]}"/>
	              </div>
	              <div class="gallery-thumbitem" data-slide-number="7">
	                <img src="${paths[8]}"/>
	              </div>
	              <span class="gallery-toggle-thumbpanel lg-icon"></span>
	            </div>
	          </div>`
	}

	const getLanguageDropdownTemplate = (currentLanguage) => {
	  return `<div class="language-dropdown">
	    <span class="language-dropdown-open language-dropdown-flag-${currentLanguage}"></span>
	    <div class="language-dropdown-content">
	      <a href="#" class="language-dropdown-item language-dropdown-flag-ru" data-language="ru"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-de" data-language="de"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-en" data-language="en"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-hu" data-language="hu"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-nl" data-language="nl"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-pt" data-language="pt"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-ro" data-language="ro"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-es" data-language="es"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-dk" data-language="dk"></a>
	      <a href="#" class="language-dropdown-item language-dropdown-flag-fr" data-language="fr"></a>
	    </div>
	  </div>`;
	}

	const getPanoramaTemplate = (currentLanguage) => {
	  return `<div id="panorama">
	        <div class="lg-toolbar lg-group panorama-toolbar">
	          <span class="lg-icon panorama-fullscreen panorama-fullscreen-disabled"></span>
	          <span class="lg-icon panorama-zoom-in"></span>
	          <span class="lg-icon panorama-zoom-out"></span>
	          ${getLanguageDropdownTemplate(currentLanguage)}
	        </div>
	    </div>`;
	}

	let panoramaUrl = '';
	let panoramaIndex = -1;
	debugger;
	let currentLanguage = getURLParameter('lang');
	if (!currentLanguage)
		currentLanguage = 'en';

    let pathsArray = [];
    /*
	    $.ajax({
	      url: `https://s3.eu-central-1.amazonaws.com/trailer-gallery/${imagesUrl}/link.json`,
	      success: (responseData) => {
	        pathsArray = responseData;
	      },
	      error: () => {
	        throw new Error('Error with request that get images set');
	      },
	      async: false
	    });
    */

    /*some test data*/
    pathsArray = [
    	'public/img/test/1.jpg',
    	'public/img/test/2.jpg',
    	'public/img/test/3.jpg',
    	'public/img/test/4.jpg',
    	'public/img/test/5.jpg',
    	'public/img/test/6.jpg',
    	'public/img/test/7.jpg',
    	'public/img/test/8.jpg',
    	'public/img/test/9.jpg'
    ];

    if (pathsArray === null || pathsArray.length === 0)
      throw new Error('Error. Set of images is empty');

    //pathsArray[4] = '/content/images/panorama.jpg';
    $('body').prepend(createInitialGalleryMarkup(pathsArray));
    let lg = $('#lightgallery').lightGallery({
      autoplay: false,
      mousewheel: false,
      download: false,
      showAfterLoad: true,
      closable: false,
      counter: false,
      scale: 0.1,
      hideBarsDelay: 600000,
      enableDrag: false,
      mode: 'lg-fade',
      speed: 1000
    });

    $('#lightgallery').on('onAfterOpen.lg', () => {
      $('.lg .lg-toolbar').append(getLanguageDropdownTemplate(currentLanguage));

      $('.lg-outer').mousewheel((e) => {
        if(e.deltaY > 0)
          $('#lg-zoom-in').click();
        else
          $('#lg-zoom-out').click();
      });

      let $a = $('#lightgallery').find('a[data-panorama-src]');
      if ($a.length != 0 && $a.attr('data-panorama-src')) {
        panoramaUrl = $a.attr('data-panorama-src');
        panoramaIndex = $a.index() + 1;
      }

      if (panoramaUrl) {
        $('#lightgallery').after(
          getPanoramaTemplate(currentLanguage)
        );

        var viewer = pannellum.viewer('panorama', {
          'type': 'equirectangular',
          'panorama': panoramaUrl,
          'autoLoad': true,
          'showControls': false,
          'hotSpots': [
            {
              'pitch': 0,
              'yaw': 180,
              'cssClass': 'panorama-button',
              'scene': 'scene',
              'createTooltipFunc': (hotSpotDiv, args) => {
                $(hotSpotDiv).append(`
              		<canvas class='panorama-button' id='circleButtonOut' height='100' width='100'></canvas>
  								<span class='panorama-button-title' data-element-translate-key='panorama-button-out'></span>
								`);
								drawCircleButton(document.querySelector('#circleButtonOut'));
                changeElementsTextLanguage(currentLanguage);
                $('#circleButtonOut').click(() => {
                  panoramaHide();
                });
              },
            }
          ]
        });

        $('.panorama-zoom-in').click(() => {
          viewer.setHfov(viewer.getHfov() - 20);
        });

        $('.panorama-zoom-out').click(() => {
          viewer.setHfov(viewer.getHfov() + 20);
        });

        $('.panorama-fullscreen').click(() => {
          $('.lg-fullscreen').click();
          $('.panorama-fullscreen').toggleClass('panorama-fullscreen-active');
        });

        $('.panorama-close').click(() => {
          $('.lg-outer, .lg-backdrop').hide();
          $('.lg-close').click();
        });
      }

      $('.language-dropdown-open').click((e) => {
        $(e.target).next().toggleClass('language-dropdown-opened');
      });

      $('.language-dropdown-item').click((e) => {
        currentLanguage = $(e.target).data('language');
        $('.language-dropdown-open').attr('class', `language-dropdown-open language-dropdown-flag-${currentLanguage}`);
        changeElementsTextLanguage(currentLanguage);
      });

      $('div.lg').append(getGalleryThumbPannel(pathsArray));

      $('.gallery-thumbitem').first().addClass('gallery-thumbitem-active');

      $('.gallery-toggle-thumbpanel').click((e) => {
        $('.gallery-thumbpanel').toggleClass('gallery-thumbpanel-collapse');
      });

      $('.gallery-thumbitem').click((e) => {
        let $item = $(e.currentTarget);
        if($item.hasClass('panorama-item')) {
          panoramaShow();
        }
        else {
          let slideNumber = $item.data('slideNumber');
          $(`.lg-thumb-item:nth-child(${(slideNumber+1)})`).click();
        }
      });
    });

    $('#lightgallery').on('onAfterAppendSubHtml.lg', () => {
      if (panoramaUrl) {
        $('#circleButtonIn').click(() => {
          panoramaShow();
        });
        drawCircleButton(document.querySelector('#circleButtonIn'));
        changeElementsTextLanguage(currentLanguage);
        /*animate panorama button entrance*/
        $('.panorama-button-in').animate({
        	opacity: 1
        }, {duration: 500});
      }
    });

    $('#lightgallery').on('onBeforeSlide.lg', (e, prevIndex, index) => {
    	/*animate panorama button fadeout*/
    	$('.panorama-button-in').animate({
        	opacity: 0
        }, {duration: 500});
      $('.gallery-thumbitem').removeClass('gallery-thumbitem-active');
      $('.gallery-thumbsgroup').find(`[data-slide-number=${index}]`).addClass('gallery-thumbitem-active');
    });

    $('#lightgallery').on('onBeforeClose.lg', () => {
      if (panoramaUrl)
        $('#panorama').remove();
    });

    $(window).click((e) => {
      if (!$(e.target).hasClass('language-dropdown-open')) {
        $('.language-dropdown-content').each((i, dropdown) => {
          let $dropdown = $(dropdown);
          if ($dropdown.hasClass('language-dropdown-opened'))
            $dropdown.removeClass('language-dropdown-opened');
        });
      }
    });

    /*start gallery on load*/
    $('#lightgallery a:first-child').click();
} 
	

window.panoramicgallery = {
	createGallery: createGallery
}