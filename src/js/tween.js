

        // console.log(explore.getAttribute('data-id'));
// })


// const explore = (sec) =>{
// //     let fun = sec.id;
// //     console.log(fun);
    
// // fun= null;
// }



const ex = document.querySelectorAll('.explore');
ex.forEach(explore => {
        explore.addEventListener('click',()=>{
                const sec = explore.getAttribute('data-id');
                const btnTransition = new TimelineMax();
btnTransition
.to(`#${sec} .poster-background img`,1,{top:0,left:0,width:'100%',height:'100%'})
.to(`#${sec} .poster-background`,1,{transform:'rotateY(0)'})
.to(`#${sec} .initial-display`,1,{opacity:0})
.set(`#${sec} .initial-display`,{css:{display:'none'}})
.add(()=>{

        switch(sec){
            case 'about':
                    var show_about  = new TimelineMax();
                    show_about
                    .set(`#about .after-content`,{css:{display:'flex'}})
                    .to('#about .after-content .about-me',2,{x:0,ease:Power2.easeIn})
                    .to('#about .after-content .about-robocon',2,{x:0,ease:Power2.easeIn},0);
                    break;
            case 'per':
                    var show_per  = new TimelineMax();
                    show_per
                    .set(`#per .after-content`,{css:{display:'flex'}})
                    .to('.card',1,{opacity:1,y:0});
                    break;
            case 'workshops':
                    var show_wk  = new TimelineMax();
                    show_wk
                    .set(`#workshops`,{css:{height:'auto'}})
                    .set(`#workshops .after-content`,{css:{display:'grid'}})
                    .to('.wk-card',1,{opacity:1});
                    break;  
                    
            case 'gallery':
                    var show_gl  = new TimelineMax();
                    show_gl
                    .set(`#gallery`,{css:{height:'auto'}})
                    .set(`#gallery .after-content`,{css:{display:'grid'}})
                    .to('#gallery .after-content',1,{opacity:1});
                    break;       
                    }
        
});
        })});
