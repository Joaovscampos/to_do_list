
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
                console.log(`${index + 1}: ${tarefa.descricao} - ${tarefa.completa ? 'Completa' : 'Pendente'} - Criada em ${tarefa.dataCriacao.toLocaleDateString()}`);
        });
    }

    listarTarefasCompletas(){
        this.tarefas
            .filter(tarefa => tarefa.completa)
            .map((tarefa, index) => console.log(`${index + 1}: ${tarefa.descricao} - Completa`));
    }

    listarTarefasPendentes(){
        this.tarefas
            .filter(tarefa => !tarefa.completa)
            .map((tarefa, index) => console.log(`${index + 1}: ${tarefa.descricao} - Pendente`));
    }

    listarTarefaPorPrioridade(prioridade){
        this.tarefas
        .filter(function(tarefa){
           return tarefa.prioridade === prioridade;
        }).map(function(tarefa,index){
            console.log(`${index + 1}: ${tarefa.descricao} - prioridade: ${tarefa.prioridade}`);
        });
    }
}













 









