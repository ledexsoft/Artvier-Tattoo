    var idioma = navigator.language || navigator.userLanguage;
    var idiomaActual = document.documentElement.lang;

    if (idioma != idiomaActual) {
      switch (idioma) {
        case "en":
          window.location.href = "index_en.html";
          break;
        case "fr":
          window.location.href = "index_fr.html";
          break;
        default:
          window.location.href = "index_en.html";
      }
    }