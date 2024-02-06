import {firestore} from './firebaseConfig';
import {collection, getDoc, addDoc, updateDoc, deleteDoc, doc,  } from 'firebase/firestore';


const collectionRef = collection(firestore, "Posts");

//Create = C 

export const addPosts = async(Posts) => {
    return await addDoc(collectionRef, Posts);

}

//Read = R

export const getAllPosts = async() => {

    const snapshot = await getDoc(collectionRef);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
   

}

//Update = U 

export const updatePosts = async(id, updatePosts) => {
    const PostsDoc = doc(firestore, 'Posts', id)
    return await updateDoc(PostsDoc, updatePosts)

}


//Delete = D

export const deletePosts = async(id) => {
    const PostsDoc = doc(firestore, 'Posts', id)
    return await deleteDoc(PostsDoc)
}