var botao=document.querySelector("#btnCadastrar");

botao.addEventListener("click",function(evento) {
    evento.preventDefault();

    var formulario=document.cadastro;
    var nome=formulario.nome.value;
    var rg=formulario.rg.value;
    var cpf=formulario.cpf.value;
    var endereco=formulario.endereco.value;
    var genero=formulario.genero.value;
    var datanasc=formulario.datanasc.value;
    var civil=formulario.civil.value;

        var relatorio=document.querySelector("#relatorio");

        relatorio.textContent += nome+ "\n" ;
        relatorio.textContent += rg+ "\n";
        relatorio.textContent += cpf+ "\n";
        relatorio.textContent += endereco+ "\n";
        relatorio.textContent += datanasc+ "\n";
        relatorio.textContent += genero+ "\n";
        relatorio.textContent += civil+ "\n";





});
