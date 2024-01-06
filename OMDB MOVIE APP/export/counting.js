function counting(){


    let tl = gsap.timeline();
    
    tl
      .from("#lowest",{
        onStart: function(){
            $('#lowest').textillate({ 
                in: { effect: "fadeInUp", },
                callback: function(){
                    $('#lowest').textillate("out")
                },  
                out: {effect: "fadeOutUp"}
             });
        }
    })
    
    .from("#sec-lowest",{
        opacity: 0,
        delay: 1,
        onStart: function(){
            $('#sec-lowest').textillate({ 
                in: { effect: "fadeInUp" },
                callback: function(){
                    $('#sec-lowest').textillate("out")
                },  
                out: {effect: "fadeOutUp"}
             });
        }
    })
    
    .from("#sec-top",{
        opacity: 0,
        delay: 1,
        onStart: function(){
            $('#sec-top').textillate({ 
                in: { effect: "fadeInUp" },
                callback: function(){
                    $('#sec-top').textillate("out")
                },  
                out: {effect: "fadeOutUp"}
             });
        }
    })
    
    .from("#top",{
        opacity: 0,
        delay: 1,
        onStart: function(){
            $('#top').textillate({ 
                in: { effect: "fadeInUp" },  
             });
        }
    })
    
    .to("#top-screen",{
        top: "-110%",
        delay: 1,
        duration: 1.2,
        ease: "power4.out",
    })
    
    }
    
export default counting;    