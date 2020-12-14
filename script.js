var batman = "https://www.dccomics.com/sites/default/files/BM_Cv44_A_gallery_5abd2134f11d95.39493991.jpg";
var blacklightning = "https://www.dccomics.com/sites/default/files/Char_Gallery_BlackLightning_COLD-DEAD-HANDS-1_5c5b2e34693780.45379527.jpg";
var theflash = "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_FL24_8-9_52ab8f9a699311.09317022.jpg";
var superman = "https://www.dccomics.com/sites/default/files/Char_Gallery_Superman_SUP01_16_5b9b02501915d5.80725381.jpg";

   var counter = 0;
    $(".button").click(function(){
    counter = counter + 1;
    $(".counter").text("The Quiz was taken " + counter + " times");
   var fly = $(".fly").val() ;        
   var color = $(".color").val();
       if(fly < 5 && color.toUpperCase() === "BLACK") {
       $(".results").text("You are Batman!");
       $(".results").append("<img  src=https://www.dccomics.com/sites/default/files/BM_Cv44_A_gallery_5abd2134f11d95.39493991.jpg>");
     } else if(fly > 5 && color.toUpperCase() === "BLACK") {
       $(".results").text("You are Black Lightning!"); 
       $(".results").append("<img src=https://www.dccomics.com/sites/default/files/Char_Gallery_BlackLightning_COLD-DEAD-HANDS-1_5c5b2e34693780.45379527.jpg>");
     } else if(fly < 5 && color.toUpperCase() === "RED") {
       $(".results").text("You are The Flash!");
       $(".results").append("<img src=https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_FL24_8-9_52ab8f9a699311.09317022.jpg>");
     }else if(fly > 5 && color.toUpperCase() === "RED") {
       $(".results").text("You are Superman!");
       $(".results").append("<img src=https://www.dccomics.com/sites/default/files/Char_Gallery_Superman_SUP01_16_5b9b02501915d5.80725381.jpg>");
     }
  
});
