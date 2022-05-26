import React from 'react';

const Footer = () => {
    return (
        <footer className=" mt-20 footer p-10 bg-primary grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5">
            <div>
                <span className="footer-title  text-xl font-semibold">Shop</span>
                <a className="link link-hover">New Products</a>
                <a className="link link-hover">Where to buy</a>
            </div>
            <div>
                <span className="footer-title  text-xl font-semibold">Explore</span>
                <a className="link link-hover">CORSAIR Innovation</a>
                <a className="link link-hover">Custom Cooling</a>
                <a className="link link-hover">CORSAIR Gaming</a>
                <a className="link link-hover">Esports</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="footer-title  text-xl font-semibold">CORSAIR</span>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Investor Relations</a>
                <a className="link link-hover">Careers</a>
                <a className="link link-hover">Social Impact</a>
                <a className="link link-hover">Press Room</a>
                <a className="link link-hover">Contact Us</a>
            </div>
            <div>
                <span className="footer-title  text-xl font-semibold">SUPPORT</span>
                <a className="link link-hover">Downloads</a>
                <a className="link link-hover">Customer Support</a>
                <a className="link link-hover">Warranty</a>
                <a className="link link-hover">RMA/Returns</a>
                <a className="link link-hover">Terms of Sale</a>
            </div>
            <div>
                <span className="footer-title text-xl font-semibold">BE THE FIRST TO KNOW</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text font-bold">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-secondary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;