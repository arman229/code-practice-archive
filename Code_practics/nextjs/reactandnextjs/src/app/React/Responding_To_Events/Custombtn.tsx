interface CustomButtonProps {
    handleCall: () => void;
    children: string;
  }
  const CustomButton: React.FC<CustomButtonProps> = ({handleCall,children}) => {
    return (
      <button
        className=" space-x-2 gap-3 bg-red-500 text-white-300 p-4"
        onClick={(e) => {
          handleCall();
        }}
      >
        {children}
      </button>
    );
  };
  export default CustomButton;
  