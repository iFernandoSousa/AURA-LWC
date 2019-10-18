({
    editClick : function(component, event, helper) {
        let id = component.get('v.Id');

        helper.sendClickEvent('edit', id);
    },
    deleteClick : function(component, event, helper) {
        let id = component.get('v.Id');

        helper.sendClickEvent('delete', id);
    }
})