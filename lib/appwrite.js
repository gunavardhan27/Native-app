import { Platform } from "react-native";
import { Account, Avatars, Client, Databases, ID} from 'react-native-appwrite';

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
const avatar = new Avatars(client)
const databases = new Databases(client)

export const createUser = async (email,password,username)=>{
    try{
        const newAccount  = await account.create(ID.unique(),email,password,username)
        console.log(newAccount)
        const avatarUrl = avatar.getInitials(username)
        await signIn(email,password)
        console.log('daridram')
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId:newAccount.$id,
                email,
                username,
                avatar:avatarUrl,
            }
        )
        return newUser
    }catch(error){
        throw new Error(error)
    }
}

export const signIn = async(email,password) =>{
    try{
        const session = await account.createEmailPasswordSession(email,password)
        return session
    }catch(error){
        throw new Error(error)
    }
}

export const getCurrentUser = async ()=>{
    const currentAccount = await account.get()
    if(!currentAccount){
        throw new Error 
    }
    return currentAccount
}