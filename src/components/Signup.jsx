import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../firebase";
import Google from "./Google";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getDatabase, ref, set } from "firebase/database";

const auth = getAuth(app);
const firestore = getFirestore(app);
// const db = getDatabase(); 

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [panNo, setPanNo] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const createUser = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await updateProfile(user, {
        displayName: `${fname} ${lname}`,
      });
  
      const userData = {
        email: email,
        fullName: `${fname} ${lname}`,
        dob: dob,
        phone: phone,
        address: address,
        panNo: panNo,
        aadharNo: aadharNo,
      };
  
      // Add user data to Firestore
      await addDoc(collection(firestore, "users"), userData);
  
      console.log("User data saved to Firestore:", userData);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  
  //for storing data in real time database
  // const createUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       updateProfile(user, {
  //         displayName: `${fname} ${lname}`,
  //       })
  //         .then(() => {
  //           const userData = {
  //             email: email,
  //             fullName: `${fname} ${lname}`,
  //             dob: dob,
  //             phone: phone,
  //             address: address,
  //             panNo: panNo,
  //             aadharNo: aadharNo
  //           };
  //           set(ref(db, 'users/' + user.uid), userData)
  //             .then(() => {
  //               console.log("User data saved to database:", userData);
  //             })
  //         });
  //     });
  // };

  return (
    <>
      <h1 className="text-3xl font-bold py-5">Signup</h1>
      <Google />
      <p className="p-3 text-center">or</p>
      <div>
        <input
          type="text"
          placeholder="First Name"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          onChange={(e) => setFname(e.target.value)}
          value={fname}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Last Name"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          onChange={(e) => setLname(e.target.value)}
          value={lname}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Email Address"
          className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          className="mb-3 bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>
      <div className="text-xs">
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox">
          <span> </span>I'd like to receive awesome emails and updates from
          GiveUmma
        </label>
      </div>
      <button
        className="w-full bg-black text-white border border-black rounded-lg p-2 mt-5"
        onClick={createUser}
      >
        Sign Up
      </button>
    </>
  );
}
export default Signup;
