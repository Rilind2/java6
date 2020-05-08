var Lajmi={
    titulli:"",
    permbajtja:"",
}

var i=0;
function shtoLajmin (){

    Lajmi.titulli=document.getElementById('titulli-new').value;
    var createTitleText=document.createTextNode(Lajmi.titulli);

    Lajmi.permbajtja=document.getElementById('permbajtja-new').value;
    var createPermbajtja=document.createTextNode(Lajmi.permbajtja);

    var createDiv=document.createElement('div');
    var createImg=document.createElement('IMG');
    var createTitulli=document.createElement('h3');
    var createParagraph=document.createElement('p');

    createDiv.id="form"+i;
    i++;
    createDiv.className="container";

    createImg.setAttribute("src","logo.png"); 
    createImg.setAttribute("alt","Logo");
    createTitulli.appendChild(createTitleText);
    createParagraph.appendChild(createPermbajtja);

    createDiv.appendChild(createImg);
    createDiv.appendChild(createTitulli);
    createDiv.appendChild(createParagraph);
    var right=document.getElementsByClassName('right-side')[0];
    right.prepend(createDiv);
    document.getElementById('temp').style.overflow="hidden";
}
© 2020 GitHub, Inc.