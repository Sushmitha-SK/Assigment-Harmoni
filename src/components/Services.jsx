import React from "react";
import "../styles/Services.css";
import { FaTruckFast } from "react-icons/fa6";
import { PiHeadphones } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";

const Services = () => {
    const servicesData = [
        {
            icon: <FaTruckFast size={40} />,
            title: "FREE AND FAST DELIVERY",
            description: "Free devlivery for all orders over $140",
        },
        {
            icon: <PiHeadphones size={40} />,
            title: "24/7 CUSTOMER SERVICE",
            description: "Friendly 24/7 customer support",
        },
        {
            icon: <GoShieldCheck size={40} />,
            title: "MONEY BACK GARUNTEE",
            description: "We return money within 30 days",
        },
    ];

    return (
        <section className="services-section">
            <hr className="services-horizonatlRule" />
            <div className="services-grid">

                {servicesData.map((service, index) => (
                    <div key={index} className="service-item">
                        <div className="service-icon">{service.icon}</div>
                        <h3 className="service-title">{service.title}</h3>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
