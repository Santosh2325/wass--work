(function($) {
    var slide = function(ele,options) {
        var $ele = $(ele);
        
        var setting = {
        	
            speed: 3000,
    
            interval: 4000,
            
        };
        
        $.extend(true, setting, options);
        
        var states = [
        
            
            { $zIndex: 3, width: 360, height: 445, top: 35, left: 110, $opacity: 0.7 },
            { $zIndex: 4, width: 408, height: 522, top: 0, left: 423, $opacity: 1 },
            { $zIndex: 3, width: 360, height: 445, top: 35, left: 800, $opacity: 0.7 },
        
            
        ];

        var $lis = $ele.find('li');
        var timer = null;

        
        $ele.find('.hi-next').on('click', function() {
            next();
        });
        $ele.find('.hi-prev').on('click', function() {
            states.push(states.shift());
            move();
        });
        $ele.on('mouseenter', function() {
            clearInterval(timer);
            timer = null;
        }).on('mouseleave', function() {
            autoPlay();
        });

        move();
        autoPlay();

    
        function move() {
            $lis.each(function(index, element) {
                var state = states[index];
                $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
            });
        }

        
        function next() {
            states.unshift(states.pop());
            move();
        }

        function autoPlay() {
            timer = setInterval(next, setting.interval);
        }
    }
    
    $.fn.hiSlide = function(options) {
        $(this).each(function(index, ele) {
            slide(ele,options);
        });
        
        return this;
    }
})(jQuery);

var acc = document.getElementsByClassName("accordion");
        var i;

        for (i=0; i<acc.length; i++) 
        {
            acc[i].addEventListener("click", function() 
            {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if(panel.style.maxHeight) 
                {
                    panel.style.maxHeight = null;
                    
                } 
                else
                {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                } 
            });
        }

function opennav()
      {
          document.getElementById("sidenav").style.width = "350px";
          document.getElementById("menu-icon").style.display = "none";
      }

      function closenav()
      {
          document.getElementById("sidenav").style.width = "0";
          document.getElementById("menu-icon").style.display = "block";
      }
