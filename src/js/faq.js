function clickQuestion(event){
    if (!event) {
        event = window.event
    };

    var element = (event.target || event.srcElement).parentElement
    
    var questionDiv = element
    
    // para evitar que dê problema no click do title e afins
    var parent = element.parentElement;

    if (parent.classList.contains('question')){
        questionDiv = parent
    }

    // daqui para frente, o questionDiv é sempre o container da pergunta
    questionDiv.classList.toggle("openQuestion")
}



// tentativa de automatizar as perguntas
DIVS = {
    "jupiter":document.getElementById("jupiter"),
    "ime":document.getElementById("ime"),
    "edisciplinas":document.getElementById("edisciplinas"),
    "outras":document.getElementById("outras")
}
FOTOS = ["gumball","anais","nicole","roberto","darwin"]

index = 0
function adicionarPergunta(pergunta){
    // pegando dados
    titulo = pergunta.titulo
    categoria = pergunta.categoria
    foto = pergunta.foto
    id = pergunta.id
    resposta = pergunta.resposta

    // adicionando na div correta
    try{divPai = DIVS[categoria].children[1]}
    catch{divPai = DIVS["outras"].children[1]}

    // tratando erros de foto
    if (!FOTOS.includes(foto)){
        foto = FOTOS[index % 4]
    }

    // direct approach
    //divPai.innerHTML +="<div id='"+ id +"' class='question' onclick='clickQuestion()'><div class='head'><img src='assets/images/"+foto+"-face.svg' alt='' srcset=''><div class='title'>"+titulo+"</div><i class='fa-solid fa-chevron-up'></i></div><div class='content'>"+resposta+"</div></div>"

    // *****************
    // indirect approach
    // *****************
    // criando container
    container = document.createElement("div")
    container.id = id
    container.classList.add("question")
    container.setAttribute("onclick", "clickQuestion()");

    // criando cabeça da pergunta
    head = document.createElement("div")
    head.classList.add("head")
    img = document.createElement("img")
    img.setAttribute("src", "assets/images/"+foto+"-face.png")
    img.setAttribute("alt", "")
    title = document.createElement("div")
    title.classList.add("title")
    title.innerHTML=titulo
    chevron = document.createElement("i")
    chevron.classList.add("fa-solid")
    chevron.classList.add("fa-chevron-up")
    head.appendChild(img)
    head.appendChild(title)
    head.appendChild(chevron)

    // criando resposta
    content = document.createElement("div")
    content.classList.add("content")
    content.innerHTML = resposta

    // adicionando no container
    container.appendChild(head)
    container.appendChild(content)

    // adicionando na div pai
    divPai.appendChild(container)

    index += 1
}
PERGUNTAS.forEach(adicionarPergunta)