    public with sharing class TaskManagerController {
    
    @AuraEnabled(cacheable=true)
    public static List<Task> getTasks() {
        return [SELECT Id, Subject FROM Task LIMIT 200];
    }

    @AuraEnabled
    public static void editTask(String id, String subject) {
        Task t = new Task(Id = id, Subject = subject);
        update t;
    }

    @AuraEnabled
    public static void deleteTask(String id) {
        Task t = new Task(Id = id);
        delete t;
    }
}
