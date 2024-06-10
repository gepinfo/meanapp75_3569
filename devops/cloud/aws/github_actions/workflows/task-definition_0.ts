module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "tickets-3569",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp75-3569-tickets:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8039",
                    "protocol": "tcp",
                    "hostPort": "8039"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp75.local:27017/meanapp75_3569?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp75.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp75.local:8080"},{"name":"SECURITYURL","value":"http://meanapp75.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp75.local:8001"},{"name":"ADMINURL","value":"http://meanapp75.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp75.local:8002"},{"name":"GCAMURL","value":"http://meanapp75.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp75.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp75"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp75",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "types-3569",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp75-3569-types:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8040",
                    "protocol": "tcp",
                    "hostPort": "8040"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp75.local:27017/meanapp75_3569?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp75.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp75.local:8080"},{"name":"SECURITYURL","value":"http://meanapp75.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp75.local:8001"},{"name":"ADMINURL","value":"http://meanapp75.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp75.local:8002"},{"name":"GCAMURL","value":"http://meanapp75.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp75.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp75"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp75",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "severity-3569",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanapp75-3569-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8041",
                    "protocol": "tcp",
                    "hostPort": "8041"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanapp75.local:27017/meanapp75_3569?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanapp75.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanapp75.local:8080"},{"name":"SECURITYURL","value":"http://meanapp75.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanapp75.local:8001"},{"name":"ADMINURL","value":"http://meanapp75.local:8004"},{"name":"CAMUNDAURL","value":"http://meanapp75.local:8002"},{"name":"GCAMURL","value":"http://meanapp75.local:8007"},{"name":"APIGATEWAY","value":"http://meanapp75.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanapp75"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanapp75",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "meanapp75",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "meanapp750",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
