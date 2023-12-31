import React, { useState, useRef, useEffect } from 'react';
import Navbar from './navbar';
import { MyFooter } from './footer';
import { Link } from 'react-router-dom';

const Addtocart = () => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const totalPrice = (cart.reduce((total, product) => total + product.price * product.quantity, 0)).toFixed(3);

  const removeFromCart = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to remove this item from the cart?');
    if (confirmDelete) {
      const updatedCart = [...cart];
      updatedCart.splice(index, 1);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const updateQuantity = (index, newQuantity) => {
    if (newQuantity >= 1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity = newQuantity;
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  return (
    <>
      <Navbar />
      <div className="w-full max-w-2xl mx-auto p-6">

        {cart.length === 0 ? (
          <div class="w-72 mx-auto p-6 rounded-lg shadow-lg bg-white">
            <p class="text-2xl font-semibold text-gray-800 mb-4">Your Shopping Cart</p>
            <div class="empty-cart-message text-center">
              <p class="text-gray-600 mb-2">Your shopping cart is empty.</p>
              <p class="text-gray-600">Start adding items to your cart.</p>
            </div>
          </div>
        ) : (<>          <p class="text-2xl font-semibold text-gray-800 mb-4   block">Your Shopping Cart</p>
          <table className="w-full border-collapse">

            <thead>

              <tr className="border-b">
                <th className="text-left py-2">Product</th>
                <th className="text-center py-2">Price($)</th>
                <th className="text-center py-2">Quantity</th>
                <th className="text-center py-2">Total($)</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="cart-item__media">
                    <div className="cart-item__image-container gradient global-media-settings">
                      <img
                        src={item.imageUrl}
                        className="cart-item__image w-12 h-12 md:w-12 md:h-16 my-2"
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td className="text-center py-2">{item.price}</td>
                  <td className="text-center py-2">
                    <button
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      className="px-2 py-1 mr-2 bg-gray-300 rounded"
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      className="px-2 py-1 ml-2 bg-blue-300 rounded"
                    >
                      +
                    </button>
                  </td>
                  <td className="text-center py-2">{(item.price * item.quantity).toFixed(2)}</td>
                  <td className="cart-item__delete text-center py-2">
                    <button onClick={() => removeFromCart(index)} className="text-red-500 hover:text-red-700 sm:px-2">
                      <i className="fa fa-trash "></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
        )}


        {cart.length === 0 ? (
          <></>
        ) : (<>
          <h2 className="text-2xl font-semibold my-2 text-center bg-blue-300">Total price:${totalPrice}</h2>
          <Myform />
        </>
        )}</div>


      <MyFooter />
    </>
  );
};

const Myform = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef();
  const successModalRef = useRef();

  const openFormModal = () => {
    setShowFormModal(true);
  };

  const closeFormModal = () => {
    setShowFormModal(false);
  };

  const openSuccessModal = () => {
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    localStorage.removeItem('cart');


    closeFormModal();


    openSuccessModal(); window.location.reload();
  };

  useEffect(() => {
    const handleClickOutsideFormModal = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        closeFormModal();
      }
    };

    const handleClickOutsideSuccessModal = (event) => {
      if (successModalRef.current && !successModalRef.current.contains(event.target)) {
        closeSuccessModal();
      }
    };

    document.addEventListener('mousedown', handleClickOutsideFormModal);
    document.addEventListener('mousedown', handleClickOutsideSuccessModal);

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideFormModal);
      document.removeEventListener('mousedown', handleClickOutsideSuccessModal);
    };
  }, []);

  return (
    <div className='t '>
      <div className='text-center'>
        <button
          onClick={openFormModal}
          className="bg-blue-500 text-white mb-6 py-2 my-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Buy the product
        </button>
      </div>
      {showFormModal && (

        <>

          


          <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
            <div className="bg-white p-8 rounded shadow-lg">

              <div ref={formRef} class="container mx-auto mt-8">

                <h2 class=" text-2xl font-semibold mb-4">Buy Form</h2>
                <form onSubmit={handleSubmit}>
                  <div class="mb-4">
                    <label for="text" class="block text-gray-600">Name</label>
                    <input type="text" id="text" name="password" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                  </div>
                  <div class="mb-4">
                    <label for="email" class="block text-gray-600">Email</label>
                    <input type="email" id="email" name="email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                  </div>
                  <div class="mb-4">
                    <label for="text" class="block text-gray-600">Address</label>
                    <input type="text" id="text" name="text" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500" required />
                  </div>
                  <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                </form>

              </div>
            </div>
          </div></>
      )}

      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
          <div ref={successModalRef} className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Success!</h2>
            <p>Your purchase is being processed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { Addtocart, Myform };