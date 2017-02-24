  /* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



// all this does is mouse tracking.
// please let me know if you find this usefull or could make use of it :D

var eye;
var n_eye = document.querySelector(".eye");
var n_iris = n_eye.querySelector(".iris");
var size = n_eye.clientWidth;

(window.onresize = function () {
  eye = {
    x: n_eye.offsetLeft + size / 2,
    y: n_eye.offsetTop + size / 2
  };
})();

window.onmouseout = window.onmouseleave = function () {
  n_iris.setAttribute("class", "iris anim");
};

window.ontouchend = function (e) {
  if (e.touches.length == 0) window.onmouseout();
}

window.onmousemove = function (e) {
  n_iris.setAttribute("class", "iris");
  var m = {
    x: e.clientX - eye.x,
    y: e.clientY - eye.y
  };
  m.rx = 0 - m.y;
  m.ry = m.x;
  ["rx", "ry"].forEach(function (r) {
    m[r] *= 0.1;
    m[r] = Math.max(-60, m[r]);
    m[r] = Math.min(60, m[r]);
  });
  n_iris.style.transform = "rotateX("+m.rx+"deg) rotateY("+m.ry+"deg) translateZ(68px) scale(0.6)";
};

window.ontouchmove = window.ontouchstart = function (e) {
  window.onmousemove(e.touches[0]);
};


/*##########################Google Maps################################*/
      function initMap() {
        var uluru = {lat:43.632932, lng:-79.933583 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

