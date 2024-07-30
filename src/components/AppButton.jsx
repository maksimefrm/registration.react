import React from "react";

export const AppButton = ({buttonText = "Сохранить",isDisabled}) => {
    return (
        <button disabled={isDisabled} type="submit" id="next-btn">
            {buttonText}
        </button>
    ) 
}