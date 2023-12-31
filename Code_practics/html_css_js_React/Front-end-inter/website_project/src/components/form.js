import React, { useState, useRef, useEffect } from 'react';

 export const Myform=()=> {
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
     
    closeFormModal();
    openSuccessModal();
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
    <div>
      <button
        onClick={openFormModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Buy
      </button>

      {showFormModal && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-gray-500 bg-opacity-80">
          <div ref={formRef} className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Buy Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium text-gray-900">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium text-gray-900">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded w-full p-2"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </form>
                
          </div>
        </div>
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
}

 
