import { LightningElement, api } from 'lwc';

export default class TaskCardLwc extends LightningElement {
    @api Description;
    @api Id;

    editClick() {
        this.sendClickEvent('edit', this.Id);
    }
    deleteClick() {
        this.sendClickEvent('delete', this.Id);
    }
    sendClickEvent (eventName, identification) {
        const taskEventClick = new CustomEvent('taskeventclick', {
            detail : {
                Action : eventName,
                Id : identification
            }
        });

        this.dispatchEvent(taskEventClick);
    }
}