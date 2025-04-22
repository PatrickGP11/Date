let mesAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let diaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

setInterval(() => {
    let date = new Date()
    let relogio = document.querySelector(".relogio")
    let diaAtual = date.getDate() /* 22 */
    let nomeDiaSemana = diaSemana[date.getDate()]
    let nomeMesAtual = mesAno[date.getMonth()] /* Mês Atual */
    let horaAtual = date.getHours()
    let minutosAtual = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    
    if(horaAtual > 0 && horaAtual <= 5) { 
        relogio.innerHTML = `<div class="card bg-noite">
        <div class="date">
        <h1>${horaAtual}:${minutosAtual}</h1>
        <p>${nomeDiaSemana}, ${diaAtual} ${nomeMesAtual}</p>
        </div>
        <i class="fa-solid fa-moon"></i>
        </div>`
    }else if(horaAtual >= 6 && horaAtual <=12) {
        relogio.innerHTML = `<div class="card bg-manha">
        <div class="date">
        <h1>${horaAtual}:${minutosAtual}</h1>
        <p>${nomeDiaSemana}, ${diaAtual} ${nomeMesAtual}</p>
        </div>
        <i class="fa-solid fa-cloud"></i>
        </div>`
    }else if(horaAtual > 12 && horaAtual < 18) {
        relogio.innerHTML = `<div class="card bg-tarde">
        <div class="date">
        <h1>${horaAtual}:${minutosAtual}</h1>
        <p>${nomeDiaSemana}, ${diaAtual} ${nomeMesAtual}</p>
        </div>
        <i class="fa-solid fa-sun"></i>
        </div>`
    }else {
        relogio.innerHTML = `<div class="card bg-manha">
        <div class="date">
        <h1>${horaAtual}:${minutosAtual}</h1>
        <p>${nomeDiaSemana}, ${diaAtual} ${nomeMesAtual}</p>
        </div>
        <i class="fa-solid fa-cloud"></i>
        </div>`
    }

}, 1000);