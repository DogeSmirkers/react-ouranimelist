# Commands to Run DynamoDB Locally

[Setting up DynamoDB Locally](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html)

[Node & DynamoDB Tutorial](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.html)

- `wget https://s3.us-west-2.amazonaws.com/dynamodb-local/dynamodb_local_latest.tar.gz -O - | tar -xz`
- `sudo apt install openjdk-11-jdk`
- in dynamo dir, start the table:   `java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb`
- `npm install aws-sdk`
- `aws dynamodb describe-table --table-name Movies --endpoint-url http://localhost:8000`
- `aws dynamodb get-item --table-name Users --key '{"attrName":{"S": "value"}}' --endpoint-url http://localhost:8000`
