import { useState } from "react";
import {io} from "socket.io-client" 
import CryptoJS from 'crypto-js';
const socket = io('ws://localhost:8080');

   function Assigment (){
        const [data,setData] = useState([])
        socket.on('message', encryptedObject => {
        const AES_PASS_KEY = '83935a8c6a5e4019a30db6cf1812ad561616cba94ed85e0025279b9dd0379236';
        const decryptedMessage = CryptoJS.AES.decrypt(encryptedObject.name, AES_PASS_KEY).toString(CryptoJS.enc.Utf8);
        const decryptedObject = JSON.parse(decryptedMessage);
        const { secret_key, ...rest } = decryptedObject;
        const calculatedSecretKey = CryptoJS.SHA256(JSON.stringify(rest)).toString(CryptoJS.enc.Hex);
        if (calculatedSecretKey === secret_key) {
        setData([...data,rest])
        } else {
         console.error('Data integrity compromised. Secret keys do not match.');
        }
       });

      return (
        <>
        <h4>Assigment Rendering</h4>
            {
             data?.map((ele,i)=>{
                return <p key={i}>{i+1}----- Name :{ele.name}---Origin :{ele.origin}----Destination :{ele.destination}</p>
                })
            }
        </>
    )
 }

 export default Assigment
