
window.addEventListener(
    "scroll",
    function() {
      var scrollTop =
        document.documentElement["scrollTop"] || document.body["scrollTop"];
      var scrollBottom =
        (document.documentElement["scrollHeight"] ||
          document.body["scrollHeight"]) - document.documentElement.clientHeight;
      scrollPercent = scrollTop / scrollBottom * 100 + "%";
      document
        .getElementById("progress")
        .style.setProperty("height", scrollPercent);
        var s =  Math.round(scrollTop / scrollBottom * 100);
     
        if(s>=0 && s < 8) {
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_home').style.backgroundColor='#04D0D9';
        }
        else if(s>8 && s<26){
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_about').style.backgroundColor='#04D0D9';
        }
        else if(s>26 && s<42){
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_per').style.backgroundColor='#04D0D9';
        }
        else if(s>42 && s<58){
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_wk').style.backgroundColor='#04D0D9';
        }
        else if(s>58 && s<65){
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_gallery').style.backgroundColor='#04D0D9';
        }
        else if(s>87 && s<150){
          document.querySelectorAll('.nav').forEach(nav =>{
            nav.style.background = '#9ACB34'; 
          });
          document.getElementById('nav_contact').style.backgroundColor='#04D0D9';
        }
       
        
    },
    { passive: true }
  );