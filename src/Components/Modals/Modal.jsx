import { useState } from "react";

export const Modal = ({ open, onClose, children }) => {
    return (
        <div
            onClick={onclose}
            className={`fixed  inset-0 flex flex-col justify-center items-center transition-colors ${
                open ? "visible bg-black/60 z-50" : "invisible"
            } `}
        >
            {/* Main Content Window */}
            <div
                className="overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};
