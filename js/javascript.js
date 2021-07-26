const formCli = document.getElementById('formCli');
const formPro = document.getElementById('formPro');

if (formCli != null) {

formCli.addEventListener('submit',(e) =>{
    e.preventDefault();  //Não deixar Recarregar 
            let cpf = document.getElementById('cpfcnpj').value;
            let nome = document.getElementById('nome').value;
            let endereco = document.getElementById('endereco').value;
            let email = document.getElementById('email').value;
    let data =
    {
        cpf,
        nome,
        endereco,
        email
    }
    let convertData = JSON.stringify(data);
    localStorage.setItem(`cliente ${cpf}`,convertData);
    return;
} );
}

if (formPro != null) {
formPro.addEventListener('submit',(e) =>{
    e.preventDefault();  //Não deixar Recarregar 
            let codigopro = document.getElementById('codpro').value;
            let descricaopro = document.getElementById('despro').value;
            let quantidadepro = document.getElementById('qtdpro').value;
    let dataPro =
    {
        codigopro,
        descricaopro,
        quantidadepro
    }
    let convertData = JSON.stringify(dataPro);
    localStorage.setItem(`produto ${codigopro}`,convertData);
} );
}