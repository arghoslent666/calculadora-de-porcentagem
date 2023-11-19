const originalmoney = document.querySelector('.original-value');
const porcentvalue = document.querySelector('.porcent-value');
const suminput = document.querySelector('.sum-input');
const subinput = document.querySelector('.sub-input');
const button = document.querySelector('.btn-calculate');
const spanresult = document.querySelector('.new-value-h3')

const formatPercentage = (value) => {
    return parseFloat(value) / 100; // Convertendo o valor para a forma correta (por exemplo, 20 para 0.20)
}

const sumporcent = () =>{
    let result = parseFloat(originalmoney.value) + (parseFloat(originalmoney.value) * formatPercentage(porcentvalue.value));
    return spanresult.textContent = `R$ ${result.toFixed(2).replace('.',',')}`;
}

const subporcent = () =>{
    let result = parseFloat(originalmoney.value) - (parseFloat(originalmoney.value) * formatPercentage(porcentvalue.value));
    return spanresult.textContent = `R$ ${result.toFixed(2).replace('.',',')}`;
}

button.addEventListener('click',()=>{
    if(suminput.checked){
        sumporcent()
        originalmoney.value =''
        porcentvalue.value = ''
        suminput.checked = ''
        spanresult.classList.add('active')
    }else if(subinput.checked){
        subporcent()
        originalmoney.value =''
        porcentvalue.value = ''
        suminput.checked = ''
        spanresult.classList.add('active')
    }
})