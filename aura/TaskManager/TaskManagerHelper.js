({
    loadData : function(component) {
        var action = component.get('c.getTasks'); 

        action.setCallback(this, function(a){
            var state = a.getState();
            if(state == 'SUCCESS') {
                let tasks = a.getReturnValue();
                window.console.log(tasks);

                component.set('v.Tasks', tasks);
                component.set('v.HasTasks', tasks.length > 0);
            }
        });
        $A.enqueueAction(action);
    },
    editTask: function(component, Id, Subject) {
        var action = component.get('c.editTask'); 
        
        action.setParams({
            "id" : Id,
            "subject" : Subject
        });

        action.setCallback(this, function(a){
            var state = a.getState();
            if(state == 'SUCCESS') {
                this.loadData(component);
            }
        });
        $A.enqueueAction(action);
    },
    deleteTask: function(component, Id) {
        var action = component.get('c.deleteTask'); 
        action.setParams({
            "id" : Id,
        });
        
        action.setCallback(this, function(a){
            debugger;
            let state = a.getState();
            window.console.log(state);

            if(state == 'SUCCESS') {
                this.loadData(component);
            }
        });
        $A.enqueueAction(action);
    },
})