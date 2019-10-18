({
    doInit : function(component, event, helper) {
        helper.loadData(component);
    },
    handleTaskEventClick: function(component, event, helper) {
        let action = event.getParam('Action');
        let id = event.getParam('Id');

        if (action == 'edit') {
            //TODO:
        } else if (action == 'delete') {
            helper.deleteTask(component, id);
        }
    }
})