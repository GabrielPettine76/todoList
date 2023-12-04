const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');
const editar = document.querySelector("btn-md");

addBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    //evito que la pagina se cargue
    const text = input.value;
    if(text !=""){
        console.log(text);
        //le asigo el texto del input
        // creo un elento li y uno p 
        const li = document.createElement('li');
        const p = document.createElement('p');
        const checkUsado = document.createElement('input');
        checkUsado.setAttribute("type","checkbox");
        checkUsado.setAttribute("id","test");
        //le asigno al p el texto 
        p.textContent = text;
        //le asigno los elementos li al ul utilizando el appedchild
        li.appendChild(checkUsado);
        li.appendChild(p);
        li.appendChild(addDeleteBtn());//agrego el boton
        //li.appendChild(updateBtn());
        ul.appendChild(li);
        input.value="";
        empty.style.display= "none";
    }
    
});

const addDeleteBtn = () =>{
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent="X";
    deleteBtn.className="btn-delete";
    
    deleteBtn.addEventListener("click", (e)=>{
        const item = e.target.parentElement;
        if(document.getElementById('test').checked){
        ul.removeChild(item);
        }
        const items = document.querySelectorAll('li');
        console.log(items.length);
        if(items.length === 0){
            empty.style.display= "block";
        }
    });
    return deleteBtn;

};

/*const updateBtn = () =>{
    const modificar = document.createElement('button');
    modificar.textContent="E";
    modificar.className="btn-delete";
    
    modificar.addEventListener("click",(e)=>{
        
        const inputEdit= document.createElement("input");
        const buttonM = document.createElement("button");
        inputEdit.setAttribute("type","text");
        ul.appendChild(inputEdit);
        ul.appendChild(buttonM);
        let valor =document.querySelector("li").textContent;
        inputEdit.value= valor;
        buttonM.textContent="modificar";
        buttonM.addEventListener("click",(e)=>{
            p.textContent=inputEdit.value;
            ul.appendChild(li)
        });
    });

    return modificar;
}*/