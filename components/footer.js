"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer-section  bg-zinc-100 mt-5">
      <footer className="footer ">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <div className="layout flex flex-col md:flex-row justify-between items-center">
          <div className="py-10 flex  items-center">
            {" "}
            <div className="text-white m-auto items-center">
              <Image src={"/logo.png"} width={100} height={100} />
              <h1 className="  md:text-[2.4rem]  lg:text-[45px]  min-[1900px]:text-[51px] leading-[30px] md:leading-[42px]  font-[500]      ">
                Pokhara Rentals
              </h1>
            </div>
          </div>
          <div className="grid gap-5">
            <ul className="flex items-center gap-5 text-white">
              <li className="social-icon__item">
                <a className="social-icon__link">
                  <BsFacebook />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link">
                  <BsLinkedin />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link">
                  <BsInstagram />
                </a>
              </li>
              <li className="social-icon__item">
                <a className="social-icon__link">
                  <BsTwitter />
                </a>
              </li>
            </ul>
            <ul className="flex items-center gap-5 text-white">
              <li className="menu__item">
                <Link href="/" className="menu__link">
                  Home
                </Link>
              </li>
              <li className="menu__item">
                <Link href="/aboutUs" className="menu__link">
                  About Us
                </Link>
              </li>
              <li className="menu__item">
              <Link href="/contct" className="menu__link">
                  Contact Us
                </Link>
              </li>
    
              <li className="menu__item">
                <a className="menu__link">Join us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
