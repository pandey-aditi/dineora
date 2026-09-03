import { Link } from "react-router-dom";
import { bottomLinks, footerSections, socialLinks } from "../assets/assets";

export default function Footer() {
    return (
        <footer className="w-full bg-[#f7f5f1] border-t border-black/[0.07] pt-20 pb-10">

            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* Main Footer */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">

                    {/* Brand */}
                    <div className="md:col-span-1">
                        <Link
                            to="/"
                            className="inline-flex items-center gap-3 group mb-5"
                        >
                            <div className="
                                w-10 h-10
                                rounded-full
                                border border-black/15
                                flex items-center justify-center
                                group-hover:border-[#80621f]
                                transition-colors
                            ">
                                <span className="font-display text-lg text-black">
                                    D
                                </span>
                            </div>

                            <div>
                                <span className="
                                    block
                                    font-display
                                    text-2xl
                                    text-[#171717]
                                    leading-none
                                ">
                                    Dineora
                                </span>

                                <span className="
                                    block
                                    text-[8px]
                                    tracking-[0.3em]
                                    uppercase
                                    text-black/40
                                    mt-1
                                ">
                                    The Art of Dining
                                </span>
                            </div>
                        </Link>

                        <p className="
                            text-black/50
                            text-sm
                            leading-relaxed
                            max-w-xs
                        ">
                            Connecting discerning palates with exceptional
                            restaurants and unforgettable dining experiences.
                        </p>

                        <Link
                            to="/search"
                            className="
                                inline-flex
                                items-center
                                mt-6
                                text-[10px]
                                tracking-[0.2em]
                                uppercase
                                text-[#80621f]
                                border-b
                                border-[#80621f]/30
                                pb-1
                                hover:border-[#80621f]
                                transition-colors
                            "
                        >
                            Discover restaurants
                        </Link>
                    </div>

                    {/* Dynamic Sections */}
                    {footerSections.map((section) => (
                        <div
                            key={section.title}
                            className="flex flex-col gap-4"
                        >
                            <h4 className="
                                text-[10px]
                                font-medium
                                tracking-[0.25em]
                                text-[#80621f]
                                uppercase
                                mb-1
                            ">
                                {section.title}
                            </h4>

                            {section.links.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.path}
                                    className="
                                        text-sm
                                        text-black/50
                                        hover:text-black
                                        transition-colors
                                        w-fit
                                    "
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="
                            text-[10px]
                            font-medium
                            tracking-[0.25em]
                            text-[#80621f]
                            uppercase
                        ">
                            Contact
                        </h4>

                        <p className="text-sm text-black/50">
                            support@example.com
                        </p>

                        <p className="
                            text-xs
                            text-black/35
                            leading-relaxed
                            max-w-[190px]
                        ">
                            Have a question about your next dining experience?
                            We'd love to hear from you.
                        </p>

                        <div className="flex gap-2 mt-2">
                            {socialLinks.map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="
                                        w-9 h-9
                                        rounded-full
                                        border border-black/10
                                        flex items-center justify-center
                                        text-black/45
                                        hover:text-white
                                        hover:bg-black
                                        hover:border-black
                                        transition-all
                                    "
                                    aria-label="Social media"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Divider */}
                <div className="
                    mt-16
                    pt-8
                    border-t border-black/[0.08]
                    flex flex-col md:flex-row
                    justify-between
                    items-center
                    gap-5
                ">

                    <p className="
                        text-[10px]
                        tracking-[0.12em]
                        uppercase
                        text-black/35
                    ">
                        © 2026 Dineora. All rights reserved.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6">
                        {bottomLinks.map((link) => (
                            <Link
                                key={link.label}
                                to={link.path}
                                className="
                                    text-[10px]
                                    tracking-[0.08em]
                                    uppercase
                                    text-black/40
                                    hover:text-black
                                    transition-colors
                                "
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Brand Signature */}
                <div className="mt-10 text-center">
                    <span className="
                        font-display
                        text-2xl
                        italic
                        text-black/[0.08]
                    ">
                        Dineora
                    </span>
                </div>

            </div>
        </footer>
    );
}