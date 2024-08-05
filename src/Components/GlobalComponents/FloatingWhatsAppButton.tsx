import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsAppButton: React.FC = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="919056353599"
        accountName="Teja Chennu"
        avatar="/whatsapp-logo.jpg"
        statusMessage="Typically replies within a few hours"
        chatMessage="Hello, how can we help you?"
        placeholder="Type a message..."
        darkMode={false}
        allowClickAway={true}
        allowEsc={true}
        notification={true}
        notificationDelay={60}
        onClick={() => console.log("Hello, how can we help you?")}
        onSubmit={() => console.log("Hello, how can we help you?")}
        onClose={() => console.log("Hello, how can we help you?")}
        onLoopDone={() => console.log("Hello, how can we help you?")}
        className=""
        buttonClassName=""
        chatboxClassName=""
        notificationClassName=""
      />
    </div>
  );
};

export default FloatingWhatsAppButton;
