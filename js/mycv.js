$(document).ready(function () {
          if (!$.browser.webkit) {
              $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
          }
      });
          function initMap() {
            var kiet = {lat: 28.752, lng: 77.499};
            var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 9,
              center: kiet
            });
            var marker = new google.maps.Marker({
              position: kiet,
              map: map
            });
          }
        
        