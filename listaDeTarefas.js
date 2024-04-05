
class Tarefa{
    constructor(descricao){
        this.descricao = descricao;
        this.completa = false;
        this.dataCriacao = new Date();
        this.prioridade = 'baixa';
    }

    marcarCompleta(){
        this.completa = true;
    }

    getdescricaoTarefa(){
        return this.descricao;
    }

    editarDescricao(descricao){
        this.descricao = descricao;
    }

    editarPrioridade(prioridade){   
        this.prioridade = prioridade;
    }
}

class GerenciadorDeTarefas{
    constructor(){
        this.tarefas = [];   
    }

    adicionarTarefa(descricao){
        const tarefa = new Tarefa(descricao);  
        this.tarefas.push(tarefa); 
    }

    removerTarefa(index){  
        if(index >= 1 && index <= this.tarefas.length){
            this.tarefas.splice(index - 1, 1);
        }else{
            console.log('Índice inválido. A tarefa não foi removida.');
        }
    }  
    
    listarTarefas() {
        this.tarefas
            .forEach((tarefa, index) => {
                console.log(`${index + 1}: ${tarefa.descricao} - ${tarefa.completa ? 'Completa' : 'Pendente'} - Criada em ${tarefa.dataCriacao.toLocaleDateString()} - Prioridade: ${tarefa.prioridade}`);
        });
    }

    listarTarefasCompletas(){
        this.tarefas
            .filter(tarefa => tarefa.completa)
            .forEach((tarefa, index) => console.log(`${index + 1}: ${tarefa.descricao} - Completa`));
    }

    listarTarefasPendentes(){
        this.tarefas
            .filter(tarefa => !tarefa.completa)
            .forEach((tarefa, index) => console.log(`${index + 1}: ${tarefa.descricao} - Pendente `));
    }

    listarTarefaPorPrioridade(prioridade){
        if(prioridade !== 'media' && prioridade !== 'baixa' && prioridade !== 'alta'){
            console.log(`${prioridade} é invalida, as prioridades só podem ser: "baixa", "media" e "alta"`);
            return; 
        }

        const tarefaPorPrioridade = this.tarefas.filter(function(tarefa){
           return tarefa.prioridade === prioridade; 
        })

        if(tarefaPorPrioridade.length === 0){
            console.log(`Não existem tarefas com a prioridade: ${prioridade}`);
            return; 
        }

        tarefaPorPrioridade.forEach(function(tarefa,index){
            console.log(`${index + 1}: ${tarefa.descricao} - prioridade: ${tarefa.prioridade}`);
        })       
    }       

}         



    









 









