'use client'
import background from '@/img/background.jpeg'
import React, { useState } from "react";
import { db } from "@/firebase"
import { setDoc,doc } from "firebase/firestore"

export default function Home() {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleJoin = async () => {
    if (email) {
      // const db=getFirestore()
      const now = Date.now()
      const newDocRef = await setDoc(doc(db, 'subscribers', email), {date: now});

      alert(`Thanks! We'll let you know when the club is open sending an email to: ${email}`);
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background.src})`,
      backgroundRepeat: 'repeat',
      height: '100vh',
      backgroundSize: 'contain'
    }}>
      <div style={{ 
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <input 
          style={{
            padding: '12px',
            fontSize: '16px',
            width: '300px',
            borderRadius: '4px',
            border: '4px solid red',
            backgroundColor: 'lightblue',
          }}
          type="email" 
          placeholder="Enter your email address" 
          value={email}
          onChange={handleEmailChange}
        />
        <button 
          onClick={handleJoin}
          style={{
            marginLeft: '4px',
            padding: '10px 10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#007bff',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Join
        </button>
    </div>
    </div>
  );
}
