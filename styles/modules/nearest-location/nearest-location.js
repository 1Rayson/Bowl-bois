
// JS that removes the bottom fade when the user scrolls to the bottom.

/* JWB Example */
      // Inspired by https://stackoverflow.com/a/34550171/1620719


      // get DOM node reference
      const locations = document.querySelector('.locations');
      const bottom_fade = document.querySelector('.locations__bottom-fade');
      // setup scroll event
      locations.addEventListener('scroll', function(event)
        {
            let locations = event.target;
            console.log(locations.scrollHeight - locations.scrollTop === locations.clientHeight);
            if (locations.scrollHeight - locations.scrollTop === locations.clientHeight)
            {
                console.log('scrolled to bottom');
                // add class to bottom_fade element when scrolled to bottom
                bottom_fade.classList.add('--hide');
            } else {
                // else ensure class is not present
                bottom_fade.classList.remove('--hide');
            }
        } 
      );


