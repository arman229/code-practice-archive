// import React, { useEffect, useState } from "react";

// const FatchData = () => {
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);

//   const fetchData = () => {
//     fetch('https://ipinfo.io/json?token=617297fdefa495')
//       .then((response) => response.json())
//       .then((response) => response.ip)
//       .then((data) => {
//         setData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setLoading(false);
//       });
//   };



//   function generateCode() {
//     return new Promise((onSucess, onFailure) => {
//       setTimeout(() => {
//         let n = Math.floor(Math.random() * 100)
//         console.log("number:" + n)
//         if (n % 3 === 0) {
//           onSucess(n)
//         } else {
//           onFailure(n)
//         }
//       }, 1000)
//     })

//   }

//   // generateCode()
//   //   .then((b) => console.log("Divisible:" + b))
//   //   .catch((n) => console.log("Not divisble:" + n))

//   async function loaddata() {
//     try {
//       const b = await generateCode();
//       console.log("Divisible:" + b)
//     } catch (e) {
//       console.log("Not divisble:" + e)
//     }
//   }
  
//   useEffect(fetchData,[])
  

//   // loaddata()

//   if (loading) {
//     return (<div>Loading...</div>)
//   }

//   return (
//     <>
//       <button type="button"  onClick={fetchData}>Fetch Data</button>
//       <h3>IP Address: {data}</h3>
//       {/* <h3>Location: {data.city}, {data.ip} {data.region}</h3> */}

//     </>
//   );
// }

// export default FatchData;
