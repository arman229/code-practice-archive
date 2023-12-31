// import Navbar from "./navbar"
// import { MyFooter } from "./footer"
// import React from 'react';
// import FAQ from 'react-faq-component';

// const data = {
//     title: 'Frequently Asked Questions',
//     rows: [
//         {
//             title: '1. How do I place an order on your e-commerce website?',
//             content: 'To place an order on our e-commerce website, simply browse our products, select the items you want to purchase, and add them to your shopping cart. When you\'re ready to complete your purchase, go to your cart, review your items, and proceed to the checkout process.',
//         },
//         {
//             title: '2. What payment methods do you accept for online orders?',
//             content: 'We accept a variety of payment methods for online orders, including credit cards, debit cards, PayPal, and other secure online payment options. You can choose your preferred payment method during the checkout process.',
//         },
//         {
//             title: '3. How can I track the status of my order?',
//             content: 'You can track the status of your order by logging into your account on our website. Once logged in, navigate to the order history section, where you can view the status and tracking information for your recent orders.',
//         },
//         {
//             title: '4. What is your return and refund policy?',
//             content: 'Our return and refund policy allows you to return products within 30 days of purchase if they are in unused and undamaged condition. Please review our detailed return policy on our website for more information on the process and eligibility for refunds.',
//         },
//         {
//             title: '5. How long does it take for my order to be delivered?',
//             content: 'The delivery time for your order may vary depending on your location and the shipping method chosen during checkout. Typically, orders are delivered within 3-5 business days, but specific delivery estimates are provided during the checkout process.',
//         },
//         {
//             title: '6. Can I change or cancel my order after it\'s been placed?',
//             content: 'If you need to change or cancel your order, please contact our customer support as soon as possible. We will do our best to accommodate your request, but it\'s important to act quickly, as orders may be processed and shipped shortly after placement.',
//         },
//         {
//             title: '7. Do you offer international shipping?',
//             content: 'Yes, we offer international shipping to many countries. During the checkout process, you can specify your shipping address, and our system will provide shipping options and costs based on your location.',
//         },
//         {
//             title: '8. What measures do you take to ensure the security of my personal and payment information?',
//             content: 'We take the security of your personal and payment information seriously. Our website employs advanced encryption and security protocols to protect your data. Additionally, we do not store sensitive payment information on our servers.',
//         },
//         {
//             title: '9. Can I contact your customer support for assistance or inquiries?',
//             content: 'Absolutely, our customer support team is available to assist you with any questions or concerns. You can reach out to us through our provided contact methods, and we\'ll be happy to help.',
//         },
//     ],
// };


// export const Faq = () => {
//     return (
//         <>


//             <div id={'faq'} style={{   padding: "30px" }} >
//                 <div className="max-w-x mx-auto" data-aos="fade-left" style={{   color: 'red !important', paddingTop: '30px', paddingBottom: "60px", borderRadius: '5px', }}>

//                     <FAQ data={data}
//                         styles={{
//                             // bgColor: "#333",
//                             // titleTextColor: "#fff",
//                             // rowTitleColor: "#fff",
//                             rowTitleTextSize: '1rem',
//                             // rowContentColor: "#fff",
//                             rowContentTextSize: '1rem',

//                             rowContentPaddingLeft: '30px',
//                             rowContentPaddingRight: '20px',
//                             arrowColor: "#fff",
//                         }} />
//                 </div>
//             </div>


//         </>
//     )
// }

 

 

// import React, { useState, useRef, useEffect } from 'react';
// import Navbar from './navbar';
// import { MyFooter } from './footer';
// import { Link } from 'react-router-dom';

// const Addtocart = () => {
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
//   const totalPrice = (cart.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(3);

//   const removeFromCart = (index) => {
//     const confirmDelete = window.confirm('Are you sure you want to remove this item from the cart?');
//     if (confirmDelete) {
//       const updatedCart = [...cart];
//       updatedCart.splice(index, 1);
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   };

//   const updateQuantity = (index, newQuantity) => {
//     if (newQuantity >= 1) {
//       const updatedCart = [...cart];
//       updatedCart[index].quantity = newQuantity;
//       setCart(updatedCart);
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="w-full max-w-2xl mx-auto p-6">

//         {cart.length === 0 ? (
//           <div class="w-72 mx-auto p-6 rounded-lg shadow-lg bg-white">
//             <p class="text-2xl font-semibold text-gray-800 mb-4">Your Shopping Cart</p>
//             <div class="empty-cart-message text-center">
//               <p class="text-gray-600 mb-2">Your shopping cart is empty.</p>
//               <p class="text-gray-600">Start adding items to your cart.</p>
//             </div>
//           </div>
//         ) : (<>          <p class="text-2xl font-semibold text-gray-800 mb-4   block">Your Shopping Cart</p>
//           <table className="w-full border-collapse">

//             <thead>

//               <tr className="border-b">
//                 <th className="text-left py-2">Product</th>
//                 <th className="text-center py-2">Price($)</th>
//                 <th className="text-center py-2">Quantity</th>
//                 <th className="text-center py-2">Total($)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cart.map((item, index) => (
//                 <tr key={index} className="border-b">
//                   <td className="cart-item__media">
//                     <div className="cart-item__image-container gradient global-media-settings">
//                       <img
//                         src={item.imageUrl}
//                         className="cart-item__image w-12 h-12 md:w-12 md:h-16 my-2"
//                         alt={item.name}
//                         loading="lazy"
//                       />
//                     </div>
//                   </td>
//                   <td className="text-center py-2">{item.price}</td>
//                   <td className="text-center py-2">
//                     <button
//                       onClick={() => updateQuantity(index, item.quantity - 1)}
//                       className="px-2 py-1 mr-2 bg-gray-300 rounded"
//                     >
//                       -
//                     </button>
//                     {item.quantity}
//                     <button
//                       onClick={() => updateQuantity(index, item.quantity + 1)}
//                       className="px-2 py-1 ml-2 bg-blue-300 rounded"
//                     >
//                       +
//                     </button>
//                   </td>
//                   <td className="text-center py-2">{(item.price * item.quantity).toFixed(2)}</td>
//                   <td className="cart-item__delete text-center py-2">
//                     <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700 sm:px-2">
//                       <i className="fa fa-trash "></i>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </>
//         )}


//         {cart.length === 0 ? (
//           <></>
//         ) : (<>
//           <h2 className="text-2xl font-semibold my-2 text-center bg-blue-300">Total price:${totalPrice}</h2>
//           <Myform />
//         </>
//         )}</div>


//       <MyFooter />
//     </>
//   );
// };

// const Myform = () => {
//   const [showFormModal, setShowFormModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const formRef = useRef();
//   const successModalRef = useRef();

//   const openFormModal = () => {
//     setShowFormModal(true);
//   };

//   const closeFormModal = () => {
//     setShowFormModal(false);
//   };

//   const openSuccessModal = () => {
//     setShowSuccessModal(true);
//   };

//   const closeSuccessModal = () => {
//     setShowSuccessModal(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();


//     localStorage.removeItem('cart');


//     closeFormModal();


//     openSuccessModal(); window.location.reload();
//   };

//   useEffect(() => {
//     const handleClickOutsideFormModal = (event) => {
//       if (formRef.current && !formRef.current.contains(event.target)) {
//         closeFormModal();
//       }
//     };

//     const handleClickOutsideSuccessModal = (event) => {
//       if (successModalRef.current && !successModalRef.current.contains(event.target)) {
//         closeSuccessModal();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutsideFormModal);
//     document.addEventListener('mousedown', handleClickOutsideSuccessModal);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutsideFormModal);
//       document.removeEventListener('mousedown', handleClickOutsideSuccessModal);
//     };
//   }, []);

//   return (
//     <div className='t '>
//       <div className='text-center'>
//         <button
//           onClick={openFormModal}
//           className="bg-blue-500 text-white mb-6 py-2 my-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//         >
//           Buy the product
//         </button>
//       </div>
//       {showFormModal && (

// <>

// <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
// <div ref={formRef} className="bg-white p-8 rounded shadow-lg">
//   <h2 className="text-2xl font-semibold mb-4">Buy Form</h2>
//   <form onSubmit={handleSubmit} className="space-y-4">
//     <div>
//       <label htmlFor="name" className="block font-medium text-gray-900">
//         Name:
//       </label>
//       <input
//         type="text"
//         id="name"
//         name="name"
//         required
//         className="border border-gray-300 rounded w-full p-2"
//       />
//     </div>
//     <div>
//       <label htmlFor="email" className="block font-medium text-gray-900">
//         Email:
//       </label>
//       <input
//         type="email"
//         id="email"
//         name="email"
//         required
//         className="border border-gray-300 rounded w-full p-2"
//       />
//     </div>
//     <button
//       type="submit"
//       className="bg-blue-500 text-white py-2 px-4 rounded hover-bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//     >
//       Submit
//     </button>
//   </form>
// </div>
// </div>


//         <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
//           <div  className="bg-white p-8 rounded shadow-lg">
           
//             <div  ref={formRef} class="container mx-auto mt-8">
            
//                 <h2 class=" text-2xl font-semibold mb-4">Buy Form</h2>
//                 <form  onSubmit={handleSubmit}>
//                 <div class="mb-4">
//                     <label for="text" class="block text-gray-600">Name</label>
//                     <input type="text" id="text" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
//                   </div>
//                   <div class="mb-4">
//                     <label for="email" class="block text-gray-600">Email</label>
//                     <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
//                   </div>
//                   <div class="mb-4">
//                     <label for="text" class="block text-gray-600">Address</label>
//                     <input type="text" id="text" name="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
//                   </div>
//                   <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
//                 </form>
               
//             </div>
//           </div>
//         </div></>
//       )}

//       {showSuccessModal && (
//         <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
//           <div ref={successModalRef} className="bg-white p-8 rounded shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Success!</h2>
//             <p>Your purchase is being processed.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export { Addtocart, Myform };
