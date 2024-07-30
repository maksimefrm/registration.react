import React from "react";
import { Header } from "../components/Header.jsx"
import { AppInput } from "../components/AppInput";
import { AppButton } from "../components/AppButton.jsx";

const Main = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="Main">
          <Header/>
          <form className="Main__form">
            <AppInput 
              inputText = "Ваше имя"
              errorText = "Введите ваше имя в правильном формате"
              inputPlaceHolder = "Введите ваше имя"
              inputType = "text"/>
            <AppInput 
              inputText = "Вашу фамилию"
              errorText = "Введите вашу фамилию в правильном формате"
              inputPlaceHolder = "Введите вашу фамилию"
              inputType = "text"/>
            <AppInput 
              inputText = "Ваш номер"
              errorText = "Введите ваш номер в правильном формате"
              inputPlaceHolder = "Введите ваш номер"
              inputType = "tel"/>
            <AppInput 
              inputText = "Ваш email"
              errorText = "Введите ваш email в правильном формате"
              inputPlaceHolder = "Введите ваш email"
              inputType = "email"/>
            <AppInput 
              inputText = "Ваш город/страна"
              errorText = "Введите ваш город/страну в правильном формате"
              inputPlaceHolder = "Введите ваш город/страну"
              inputType = "country"/>
            <AppButton isDisabled={false}/>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
