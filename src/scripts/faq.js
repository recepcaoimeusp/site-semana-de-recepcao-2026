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
    
    // Toggle do conteúdo (acordeon) com animação
    const content = questionDiv.querySelector('.content');
    if (content) {
        const isClosed = content.style.maxHeight === "0px" || !content.style.maxHeight;
        if (isClosed) {
            content.style.paddingTop = "1.5rem";
            content.style.paddingBottom = "1.5rem";
            content.style.paddingLeft = "1.5rem";
            content.style.paddingRight = "1.5rem";
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.opacity = "1";
        } else {
            content.style.paddingTop = "0px";
            content.style.paddingBottom = "0px";
            content.style.paddingLeft = "0px";
            content.style.paddingRight = "0px";
            content.style.maxHeight = "0px";
            content.style.opacity = "0";
        }
    }
    
    // Toggle do ícone (rota o ▶)
    const icon = questionDiv.querySelector('.toggle-icon');
    if (icon && content) {
        icon.style.transform = (content.style.maxHeight === "0px" || !content.style.maxHeight) ? 'rotate(0deg)' : 'rotate(90deg)';
    }
}



// tentativa de automatizar as perguntas
DIVS = {
    "jupiter":document.getElementById("jupiter"),
    "ime":document.getElementById("ime"),
    "edisciplinas":document.getElementById("edisciplinas"),
    "outras":document.getElementById("outras")
}
FOTOS = ["gumball","anais","darwin","nicole","ricardo"]

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
        foto = FOTOS[index % FOTOS.length]
    }

    // Criando container com Tailwind
    container = document.createElement("div")
    container.id = id
    container.classList.add("question", "rounded-xl", "shadow-lg", "border-4", "overflow-hidden", "transition")
    container.setAttribute("onclick", "clickQuestion()");

    // Criando cabeça da pergunta com Tailwind
    head = document.createElement("div")
    head.classList.add("head", "flex", "items-center", "gap-4", "px-6", "py-4", "cursor-pointer", "transition")
    
    // Ícone toggle
    toggleIcon = document.createElement("span")
    toggleIcon.classList.add("toggle-icon", "text-2xl", "font-bold")
    toggleIcon.textContent = "▶"
    toggleIcon.style.fontFamily = "Minecraftia, monospace"
    
    img = document.createElement("img")
    img.setAttribute("src", "assets/images/"+foto+"-face.png")
    img.setAttribute("alt", "")
    img.classList.add("w-12", "h-12", "object-cover", "object-center", "shrink-0")
    
    title = document.createElement("div")
    title.classList.add("title", "flex-1", "text-xl", "font-bold", "p-0")
    title.innerHTML = titulo
    
    head.appendChild(toggleIcon)
    head.appendChild(img)
    head.appendChild(title)

    // Criando resposta com Tailwind
    content = document.createElement("div")
    content.classList.add("content", "text-sm", "leading-relaxed")
    content.innerHTML = resposta

    // Adicionando no container
    container.appendChild(head)
    container.appendChild(content)

    // Adicionando na div pai
    divPai.appendChild(container)

    index += 1
}

const ordemVisual = ["edisciplinas", "ime", "jupiter", "outras"];
ordemVisual.forEach(cat => {
    // Filtra as perguntas da categoria atual
    const perguntasDaCategoria = PERGUNTAS.filter(p => p.categoria === cat);
    perguntasDaCategoria.forEach(adicionarPergunta);
});