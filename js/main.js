document.addEventListener("DOMContentLoaded", function(event) {


    var xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(xhttp.responseText);

            var potions = data['potions'];
        
            for(var i = 1; i < 7; i++){
            
                var nome = potions[i]['name'];
                var preco = potions[i]['price'];
                var imagem = potions[i]['image'];
            
                var template = '';
                template += '<a href="javascript: openLightBox(' + encodeURIComponent(JSON.stringify(potions[i])) + ');" class="produtos-potions">';
                template += '   <img class="potion" src="./images/products/' + imagem + '">';
                template += '   <h3>' + nome +   ' - <b>$' + preco + '</b></h3>';
                template += '</a>';
                        
                document.querySelector('.produtos').innerHTML += template;
            }
    
        }
    };

    xhttp.open("GET", "https://cdn.rawgit.com/LucasRuy/1d4a5d45e2ea204d712d0b324af28bab/raw/342e0e9277be486102543c7f50ef5fcf193234b6/potions.json", true);

    xhttp.send();
});


function openLightBox(data){
    var lightBox = document.querySelector('.lightbox');
    lightBox.style.display = 'block';

    lightBox.querySelector('.lightbox-details-name').innerHTML = data.name;
    lightBox.querySelector('.lightbox-details-price').innerHTML = data.price;
    lightBox.querySelector('.lightbox-image-img').setAttribute("src","./images/products/"+ data.image);
    lightBox.querySelector('.lightbox-details-use').innerHTML = data.effect;

    document.querySelector('.lightbox-details-ingredients').innerHTML ='';

    for (var i = 0; i < data.ingredients.length ; i++) {
     var ingredient = data.ingredients[i]
     var template = "<li> " + ingredient + "  </li>";

     document.querySelector('.lightbox-details-ingredients').innerHTML += template;

    }
}

function closeLightBox(){
    var lightBox = document.querySelector('.lightbox');
    lightBox.style.display = 'none';
}

function openmenumobile(){
    document.querySelector('.menu-mobile').classList.add('active')
}

function closemenumobile(){
    document.querySelector('.menu-mobile').classList.remove('active')
}