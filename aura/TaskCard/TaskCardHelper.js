({
    sendClickEvent: function (eventName, identification) {
        let taskEventClick = $A.get("e.c:TaskEventClick");

        taskEventClick.setParams({ "Action": eventName });
        taskEventClick.setParams({ "Id": identification });
        taskEventClick.fire();
    }
})