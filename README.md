# AURA-LWC

Pessoal, o motivo do Deployment não ter funcionado foi porque eu utilizei o mesmo nome do componente do AURA e a Salesforce não permite que você tenha AURA e LWC com o mesmo nome :/ "My bad".

Sobre as propriedades, essas são as configurações necessárias para o seu metadata:

```
    <targetConfigs>
        <targetConfig targets="lightning__AppPage,lightning__RecordPage,lightning__HomePage">
            <property name="Title" type="String" default="Tasks" label="Title" description="Indicate the Title of the Card"/>
        </targetConfig>
    </targetConfigs>
```

Para trocar o nome do componente para algo mais amigável, e uma descrição, temos que adicionar no mesmo metadata:

```
    <masterLabel>Task Manager - LWC</masterLabel>
    <description>Allow Create, Edit and Delete Tasks with just your Subject</description>
```
