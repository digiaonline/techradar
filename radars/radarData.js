//This is the title for your window tab, and your Radar
document.title = "Digia Technology Radar H1/2018";


//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':190,'name':'Primary I'}
                  ,{'r':280,'name':'Primary II'}
                  ,{'r':345,'name':'Trial'}
                  ,{'r':390,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];



var h = 950;
var w = 1150;

var radar_data = [
    { "quadrant": "Languages & Frameworks",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            { name: 'Scala', pc: { r: 371, t: 170 }, movement: 'c' },
            { name: 'Qt', pc:{ r: 355 , t: 110 }, movement: 'c' },
            { name: 'Backbone', pc:{ r: 360 , t: 155 }, movement: 'c' },

            { name: 'MobX', pc: { r: 330, t: 155 }, movement: 'c' },
            { name: 'Flow', pc: { r: 300, t: 160 }, movement: 'c' },
            { name: 'Vue.js', pc:{ r: 290 , t: 150 }, movement: 'c' },
            { name: 'R', pc:{ r: 310 , t: 111 }, movement: 'c' },
            { name: 'Spark', pc:{ r: 315 , t: 100 }, movement: 'c' },
            
            { name: 'ClojureScript', pc:{ r: 219 , t: 110 }, movement: 'c' },
            { name: 'Clojure', pc: { r: 200, t: 133 }, movement: 'c' },
            { name: 'Kendo UI', pc: { r: 265, t: 150 }, movement: 'c' },
            { name: 'VB.net', pc: { r: 255, t: 175 }, movement: 'c' },
            { name: 'Go', pc: { r: 260, t: 110 }, movement: 'c' },
            { name: 'Python', pc: { r: 209, t: 142 }, movement: 'c' },
            
            { name: 'JavaScript', pc:{ r: 55 , t: 160 }, movement: 'c' },
            { name: 'Java', pc:{ r: 30 , t: 150 }, movement: 'c' },
            { name: 'Node.js', pc:{ r: 120 , t: 110 }, movement: 'c' },
            { name: 'React', pc:{ r: 90 , t: 130 }, movement: 'c' },
            { name: 'PHP', pc: { r: 160, t: 153 }, movement: 'c' },
            { name: 'Laravel', pc: { r: 165, t: 140 }, movement: 'c' },
            { name: 'Lumen', pc: { r: 165, t: 110 }, movement: 'c' },
            { name: 'Spring Boot', pc:{ r: 140 , t: 165 }, movement: 'c' },
            { name: 'ASP.NET', pc:{ r: 60 , t: 110 }, movement: 'c' },
            { name: 'Angular', pc:{ r: 90 , t: 150 }, movement: 'c' },
            { name: 'C#', pc:{ r: 130 , t: 130 }, movement: 'c' },
            { name: 'Redux', pc:{ r: 150 , t: 100 }, movement: 'c' },
            { name: 'TypeScript', pc: { r: 110, t: 173 }, movement: 'c' }
        ]
    },
    { "quadrant": "DevOps & Tools",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            { name: 'SVN', pc: { r: 369, t: 15 }, movement: 'c' },
            { name: 'Heat', pc: { r: 355, t: 70 }, movement: 'c' },
            { name: 'Consul', pc: { r: 359, t: 50 }, movement: 'c' },
            
            { name: 'Terraform', pc: { r: 305, t: 40 }, movement: 'c' },
            { name: 'Graylog', pc: { r: 295, t: 15 }, movement: 'c' },
            { name: 'ELK', pc: { r: 318, t: 70 }, movement: 'c' },
            { name: 'Capistrano', pc: { r: 299, t: 50 }, movement: 'c' },
            { name: 'Kontena', pc: { r: 295, t: 75 }, movement: 'c' },
            { name: 'Bamboo', pc: { r: 330, t: 58 }, movement: 'c' },
            { name: 'Kubernetes', pc: { r: 320, t: 25 }, movement: 'c' },
            
            { name: 'Artifctory', pc: { r: 260, t: 10 }, movement: 'c' },
            { name: 'CloudFormation', pc: { r: 235, t: 65 }, movement: 'c' },
            { name: 'Nginx', pc: { r: 260, t: 30 }, movement: 'c' },
            { name: 'TFS', pc: { r: 206, t: 40 }, movement: 'c' },
            { name: 'Packer', pc: { r: 220, t: 10 }, movement: 'c' },
            { name: 'Vagrant', pc: { r: 260, t: 70 }, movement: 'c' },
            { name: 'F5', pc: { r: 239, t: 25 }, movement: 'c' },
            { name: 'GitHub', pc: { r: 200, t: 25 }, movement: 'c' },
            { name: 'Travis CI', pc: { r: 210, t: 79 }, movement: 'c' },
            { name: 'TestRail', pc: { r: 210, t: 60 }, movement: 'c' },
            { name: 'SoapUI', pc: { r: 229, t: 51 }, movement: 'c' },
            { name: 'Locust', pc: { r: 249, t: 41 }, movement: 'c' },
            { name: 'Chef Inspec', pc: { r: 265, t: 85 }, movement: 'c' },
            
            { name: 'Docker Swarm', pc: { r: 110, t: 50 }, movement: 'c' },
            { name: 'VSTS', pc: { r: 85, t: 20 }, movement: 'c' },
            { name: 'Robot Framework', pc: { r: 55, t: 15 }, movement: 'c' },
            { name: 'Nexus 3', pc: { r: 130, t: 75 }, movement: 'c' },
            { name: 'Chef', pc: { r: 75, t: 65 }, movement: 'c' },
            { name: 'Jenkins', pc: { r: 95, t: 70 }, movement: 'c' },
            { name: 'GitLab', pc: { r: 30, t: 50 }, movement: 'c' },
            { name: 'HAProxy', pc: { r: 150, t: 30 }, movement: 'c' },
            { name: 'Sonarqube', pc: { r: 160, t: 60 }, movement: 'c' },
            { name: 'Ansible', pc: { r: 100, t: 30 }, movement: 'c' },
            { name: 'Docker', pc: { r: 69, t: 35 }, movement: 'c' },
            { name: 'JMeter', pc: { r: 110, t: 7 }, movement: 'c' },
            { name: 'OWASP ZAP', pc: { r: 139, t: 9 }, movement: 'c' },
        ]
    },
    { "quadrant": "Cloud, Platforms, Products",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            { name: 'Oracle Cloud', pc: { r: 375, t: 200 }, movement: 'c' },
            { name: 'Liferay', pc:{ r: 375 , t: 250 }, movement: 'c' },
            { name: 'Automation Anywhere', pc:{ r: 375 , t: 220 }, movement: 'c' },
            
            { name: 'Openshift v3', pc: { r: 300, t: 250 }, movement: 'c' },
            { name: 'IBM Cloud', pc: { r: 305, t: 190 }, movement: 'c' },
            { name: 'Contentful', pc: { r: 295, t: 220 }, movement: 'c' },
            { name: 'Blueprism', pc: { r: 315, t: 235 }, movement: 'c' },
            { name: 'Grafana', pc: { r: 290, t: 230 }, movement: 'c' },
            
            { name: 'Google Cloud', pc: { r: 205, t: 240 }, movement: 'c' },
            { name: 'UpCloud', pc: { r: 250, t: 230 }, movement: 'c' },
            { name: 'Dynamics CRM', pc: { r: 220, t: 200 }, movement: 'c' },
            { name: 'Dynamics AX', pc: { r: 205, t: 220 }, movement: 'c' },
            { name: 'M-Files', pc:{ r: 265 , t: 210 }, movement: 'c' },
            { name: 'Globalsign SSO', pc:{ r: 230 , t: 250 }, movement: 'c' },
            { name: 'Drupal 8', pc: { r: 205, t: 195 }, movement: 'c' },
            { name: 'WordPress', pc: { r: 250, t: 250 }, movement: 'c' },
            { name: 'Thingworx', pc: { r: 265   , t: 222 }, movement: 'c' },
            { name: 'Episerver', pc:{ r: 260 , t: 200 }, movement: 'c' },
            { name: 'Sharepoint', pc:{ r: 260 , t: 190 }, movement: 'c' },
            { name: 'RichRelevance', pc:{ r: 210 , t: 255 }, movement: 'c' },
            
            { name: 'Magento', pc: { r: 65, t: 240 }, movement: 'c' },
            { name: 'Qlikview', pc: { r: 150, t: 190 }, movement: 'c' },
            { name: 'Power BI', pc: { r: 160, t: 220 }, movement: 'c' },
            { name: 'Qlik Sense', pc: { r: 150, t: 260 }, movement: 'c' },
            { name: 'Dynamics 365', pc: { r: 140, t: 215 }, movement: 'c' },
            { name: 'Azure', pc: { r: 105, t: 230 }, movement: 'c' },
            { name: 'AWS', pc: { r: 40, t: 250 }, movement: 'c' },
            { name: 'Progress', pc:{ r: 70 , t: 200 }, movement: 'c' },
            { name: 'InRiver', pc:{ r: 130 , t: 199  }, movement: 'c' },
            { name: 'Splunk', pc: { r: 80, t: 255 }, movement: 'c' },
            { name: 'UIPath', pc: { r: 160, t: 240 }, movement: 'c' },
        ]
    },
    { "quadrant": "Integration, API, DB",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'Oracle API Manager', pc: { r: 378, t: 345 }, movement: 'c' },
            { name: 'Kong', pc: { r: 355, t: 285 }, movement: 'c' },
            { name: 'Progress Sonic', pc: { r: 355, t: 330 }, movement: 'c' },
            { name: 'Informatica', pc: { r: 369, t: 275 }, movement: 'c' },
            
            { name: '3Scale', pc: { r: 310, t: 290 }, movement: 'c' },
            { name: 'Apigee', pc: { r: 300, t: 280 }, movement: 'c' },
            { name: 'Automic', pc: { r: 290, t: 340 }, movement: 'c' },
            { name: 'Scribe', pc: { r: 290, t: 320 }, movement: 'c' },
            { name: 'Apache Kafka', pc: { r: 325, t: 275 }, movement: 'c' },
            { name: 'Red Hat JBoss Fuse', pc: { r: 300, t: 330 }, movement: 'c' },
            { name: 'MariaDB', pc: { r: 330, t: 310 }, movement: 'c' },
            { name: 'InfluxDB', pc: { r: 330, t: 355 }, movement: 'c' },
            { name: 'Redis', pc: { r: 330, t: 340 }, movement: 'c' },
            { name: 'SAP Cloud Integration', pc: { r: 300, t: 310 }, movement: 'c' },
            { name: 'MuleSoft Anypoint/CE', pc: { r: 299, t: 275 }, movement: 'c' },
            
            { name: 'Oracle (SOA Suite, Service Bus)', pc: { r: 225, t: 345 }, movement: 'c' },
            { name: 'Tyk API Gateway', pc: { r: 250, t: 310 }, movement: 'c' },
            { name: 'Frends4', pc: { r: 250, t: 292 }, movement: 'c' },
            { name: 'Frends API Management', pc: { r: 250, t: 355 }, movement: 'c' },
            { name: 'PostgreSQL', pc:{ r: 200 , t: 290 }, movement: 'c' },
            { name: 'WSO2 API Management', pc:{ r: 250 , t: 331 }, movement: 'c' },
            { name: 'MS BizTalk', pc: { r: 199, t: 319 }, movement: 'c' },
            { name: 'Digia IPaaS', pc: { r: 249, t: 319 }, movement: 'c' },
            
            { name: 'IBM API Connect', pc: { r: 110, t: 335 }, movement: 'c' },
            { name: 'IBM (IIB, DataPower, MQ)', pc: { r: 20, t: 315 }, movement: 'c' },
            { name: 'ServiceMix', pc: { r: 130, t: 300 }, movement: 'c' },
            { name: 'Dell Boomi', pc: { r: 120, t: 310 }, movement: 'c' },
            { name: 'MySQL', pc:{ r: 80 , t: 310 }, movement: 'c' },
            { name: 'CouchDB', pc:{ r: 120 , t: 280 }, movement: 'c' },
            { name: 'SQL Server', pc:{ r: 119 , t: 350 }, movement: 'c' },
            { name: 'Oracle Database', pc:{ r: 168 , t: 330 }, movement: 'c' },
            { name: 'DB2', pc:{ r: 160 , t: 340 }, movement: 'c' },
        ]
    }
];
