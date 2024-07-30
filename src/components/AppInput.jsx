import React from "react";

export const AppInput =({inputText,errorText,inputPlaceHolder,inputType})=> {
    return(
        <label className="input-wrapper" htmlFor="username">
              {inputText}
              <input
                required
                type="text"
                name="username"
                id="username"
                placeholder={inputPlaceHolder}
              />
              <span id="error-message">
                {errorText}
              </span>
            </label>
    )
}