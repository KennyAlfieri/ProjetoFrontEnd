// JS é fracamente tipado - tipagem é automática acontece quando atribuímos um valor

let nomeAluno = 'Israel Marques';
let emailAluno = 'eumesmo@gmail.com';
let logado = true;
let rmAluno = 789456;
const DATA_NASCIMENTO ='02/12';

console.log(nomeAluno, emailAluno);
console.log(logado, rmAluno);
console.log(DATA_NASCIMENTO);

// template string = deve iniciar e terminar com crase ``
// para chamar uma variável usamos ${} = placeholder
console.log(`Nome do aluno ${nomeAluno} email ${emailAluno}`);

console.log(DATA_NASCIMENTO);
// DATA_NASCIMENTO = "02/12";
// console.log(DATA_NASCIMENTO);

for(let i=0; i<=10; i++){
    console.log(i);    
}
console.log(`VALOR FINAL DO I = ${i}`);

