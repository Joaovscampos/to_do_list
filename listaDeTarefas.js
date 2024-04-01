
class Tarefa{
    constructor(descricao,prioridade){
        this.descricao = descricao;
        this.completa = false;
        this.dataCriacao = new Date();
        this.prioridade = prioridade; 
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

    definirPrioridade(prioridade){
        this.prioridade = prioridade;
    }
}

class GerenciadorDeTarefas{
    constructor(){
        this.tarefas = [];   
    }

    adicionarTarefa(descricao,prioridade){
        const tarefa = new Tarefa(descricao,prioridade);  
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

    listarTarefaPrioridadeAlta(){
        this.tarefas
        .filter(function(tarefa,index){
            if (tarefa.prioridade = 'alta')
            console.log(`${index + 1}: ${tarefa.descricao} - ${tarefa.prioridade} - ${tarefa.completa}`);
        })
    }

    listarTarefaPrioridadeMedia(){
        this.tarefas
        .filter(function(tarefa,index){
            if (tarefa.prioridade = 'media')
            console.log(`${index + 1}: ${tarefa.descricao} - ${tarefa.prioridade} - ${tarefa.completa}`);
        })
    }

    listarTarefaPrioridadeBaixa(){
        this.tarefas
        .filter(function(tarefa,index){
            if (tarefa.prioridade = 'baixa')
            console.log(`${index + 1}: ${tarefa.descricao} - ${tarefa.prioridade} - ${tarefa.completa}`)
        });
    }
}








 









