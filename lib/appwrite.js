import { Platform } from "react-native";
import { Client,account } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint:'https://cloud.appwrite.io/v1',
    platform:'com.guna.aora',
    projectId:'66fc3d970019e3b1a456',
    databaseId:'66fc421d002b6b40bf35',
    userCollectionId:'66fc42550025cba7acbf',
    videoCollectionId:'66fc44fd0001c3557256',
    storageId:'66fc4f96000648dba31b'
}

const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);

export const createUser = ()=>{
    

// Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
    .then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });

}