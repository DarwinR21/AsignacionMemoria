let paginas = ["A","B","C","D","E","F","G","H","I","J"]
let tiempos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let marco = []
var divTiempo = document.getElementById("tiempos");
var divPagina = document.getElementById("paginas");
var letras = document.getElementById("letras");
var letraUl= "ul";
var letraLi= "li";
var fallo = "F";
function fifo(item,tiempo){
    
    var error2 = document.getElementById("error");
    var f= document.createElement("p");
    f.innerHTML = "F"

    LongMar= marco.length
    if(marco.indexOf(item)!=-1){
        var ulList = document.createElement('ul');
    
        for (i=0; i<=2; i++){
            
            var list = document.createElement('li');
            list.setAttribute('class', letraLi +tiempo+ i)
            if(marco[i] != undefined){
                list.innerHTML = marco[i];
            }else{
                list.innerHTML = "";
                
            }                
            ulList.appendChild(list)
            ulList.setAttribute('class', letraUl + tiempo)
            letras.appendChild(ulList)
          

        }   
    }else{
        if(LongMar<3){
            marco.push(item)
            var ulList = document.createElement('ul');
        
            for (i=0; i<=2; i++){
                //debugger
                var list = document.createElement('li');
                list.setAttribute('class', letraLi +tiempo+ i)
                if(marco[i] != undefined)
                    list.innerHTML = marco[i];
                   
                else{
                    list.innerHTML = "";
                    
                }                
                ulList.appendChild(list)
                ulList.setAttribute('class', letraUl + tiempo)
                letras.appendChild(ulList)
                f.setAttribute('class', fallo+tiempo)
                error2.appendChild(f);
              

            }
        }else if(LongMar > 2){
            
            marco.shift();
            marco.push(item);

            var ulList = document.createElement('ul');
        
            for (j=0; j<=2; j++){
                
                var list = document.createElement('li');
                list.setAttribute('class', letraLi +tiempo+ j)
                if(marco[j] != undefined)
                    list.innerHTML = marco[j];
                   
                else{
                    list.innerHTML = "";
                    
                }                
                ulList.appendChild(list)
                ulList.setAttribute('class', letraUl + tiempo)
                letras.appendChild(ulList)
                f.setAttribute('class', fallo+tiempo)
                error2.appendChild(f);
            }           
        }
    }
}
function canvas(x){
    
    //CANVAS
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.rect((x+84), 30, 30, 30);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.stroke();
    //ctx.fillStyle = "#FF0000";
    ctx.fill()
    ctx.closePath();

    ctx.beginPath();
    ctx.rect((x+84), 65, 30, 30);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.stroke();
    //ctx.fillStyle = "#FF0000";
    ctx.fill()
    ctx.closePath();
    ctx.beginPath();
    ctx.rect((x+84), 100, 30, 30);
    ctx.strokeStyle = "rgba(255, 255, 255, 1)";
    ctx.stroke();
    //ctx.fillStyle = "#FF0000";
    ctx.fill()
    ctx.closePath();
}


function tiemposT(){

    for (let i in tiempos){
        
        setTimeout(() => {
            //TIEMPOS
            tiempo = tiempos[i].toString();    
            var td = document.createElement("td");
            if(i<3){
                td.classList.add("numero");
            }else if(i>2 && i<=5){
                td.classList.add("numero2");
            }else if(i>5 && i<= 10){
                td.classList.add("numero3");
            }else if(i>10){
                td.classList.add("numero4");
            }
            td.innerHTML = tiempo
            divTiempo.appendChild(td); 
           
            //PAGINAS
            var posicion = [Math.floor(Math.random()*paginas.length)]
            item = paginas[posicion]
            var tdP = document.createElement("td");
            if(i<3){
                tdP.classList.add("numero");
                tdP.classList.add("paginaTOP");
            }else if(i>2 && i<=5){
                tdP.classList.add("numero2");
                tdP.classList.add("paginaTOP");
            }else if(i>5 && i<= 10){
                tdP.classList.add("numero3");
                tdP.classList.add("paginaTOP");
            }else if(i>10){
                tdP.classList.add("numero4");
                tdP.classList.add("paginaTOP");
            }
            tdP.innerHTML = item
            divPagina.appendChild(tdP);

            

            setTimeout(() => {
                canvas((i*110),item);
                fifo(item,tiempo);
            },2000);
           
           
        }, i*4000);
           
    }
}

tiemposT();