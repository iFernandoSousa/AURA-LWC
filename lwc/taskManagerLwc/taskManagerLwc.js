import { LightningElement, api, wire } from 'lwc';
import getTasks from '@salesforce/apex/TaskManagerController.getTasks';
import editTask from '@salesforce/apex/TaskManagerController.editTask';
import deleteTask from '@salesforce/apex/TaskManagerController.deleteTask';

export default class TaskManager extends LightningElement {
    @api Title;
    
    @wire(getTasks) //@wire(getTasks, {id : '$Title'})
    Tasks;

    get HasTasks() {
        return this.Tasks && this.Tasks.length > 0;
    }

    handleTaskEventClick(event) {
        let action = event.detail.Action;
        let id = event.detail.Id;
        
        // 1 === '1'
        if (action === 'edit') {
            this.editTask(id);
        } else if (action === 'delete') {
            this.deleteTask(id);
        }
    }

    deleteTask(id) {
        window.console.log(id);
        //TODO: Implementar
    }

    editTask(id) {
        window.console.log(id);
        //TODO: Implementar
    }

    // constructor() {
    //     super();
    //     //Componente foi criado
    // }

    // connectedCallback() {
    //     //Quando o componente é carregado na tela
    // }

    // disconnectedCallback() {
    //     //Componente foi removido da tela
    // }

    // renderedCallback() {
    //     //Quando o componente foi renderizado na tela
    // }

    // errorCallback(error, stack) {
    //     //Tratar erros do seu componente
    // }
}