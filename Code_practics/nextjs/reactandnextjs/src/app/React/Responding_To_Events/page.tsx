"use client";
import React from "react";
import CustomButton from "@/app/React/Responding_To_Events/Custombtn";
function MainApp() {
  return (
    <>
      <h2>Responding to Events</h2>
      <div className="flex gap-2 bg-blue-400">
        <UploadImage />
        <UploadImage />
      </div>
    </>
  );
}

export default MainApp;

const UploadImage: React.FC = () => {
  return (
    <CustomButton handleCall={() => alert("345643")}>Upload Image</CustomButton>
  );
};
