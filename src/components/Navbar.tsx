import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext.tsx";
import {
    Menu,
    X,
    LogOut,
    LayoutDashboard,
    ShieldCheck,
} from "lucide-react";

export default function Navbar() {
    const { user, logout, setAuthModalOpen } = useAppContext();

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setMobileMenuOpen(false);
        setDropdownOpen(false);
    }, [location]);

    const handleDashboardClick = () => {
        if (!user) {
            setAuthModalOpen(true);
        } else {
            navigate("/dashboard");
        }
    };

    const isHome = location.pathname === "/";
    const lightNav = scrolled || !isHome;

    return (
        <nav
            className={`
                fixed top-0 left-0 w-full z-40
                transition-all duration-500
                ${
                    lightNav
                        ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-black/5 h-16"
                        : "bg-transparent h-20"
                }
            `}
        >
            <div className="max-w-7xl mx-auto h-full px-5 md:px-10 flex items-center justify-between">

                {/* BRAND */}
                <Link
                    to="/"
                    className="group flex items-center gap-3"
                >
                    <div
                        className={`
                            w-9 h-9 rounded-full
                            flex items-center justify-center
                            border transition-all duration-300
                            ${
                                lightNav
                                    ? "border-black/15"
                                    : "border-white/30"
                            }
                        `}
                    >
                        <span
                            className={`
                                font-display text-lg
                                ${
                                    lightNav
                                        ? "text-black"
                                        : "text-white"
                                }
                            `}
                        >
                            D
                        </span>
                    </div>

                    <div className="leading-none">
                        <span
                            className={`
                                block font-display text-xl tracking-wide
                                transition-colors
                                ${
                                    lightNav
                                        ? "text-black"
                                        : "text-white"
                                }
                            `}
                        >
                            Dineora
                        </span>

                        <span
                            className={`
                                hidden sm:block text-[8px]
                                tracking-[0.28em] uppercase mt-1
                                ${
                                    lightNav
                                        ? "text-black/40"
                                        : "text-white/50"
                                }
                            `}
                        >
                            The Art of Dining
                        </span>
                    </div>
                </Link>

                {/* DESKTOP NAVIGATION */}
                <div className="hidden md:flex items-center gap-9">
                    <Link
                        to="/"
                        className={`
                            relative text-[13px] tracking-wide
                            transition-colors
                            ${
                                location.pathname === "/"
                                    ? lightNav
                                        ? "text-black"
                                        : "text-white"
                                    : lightNav
                                    ? "text-black/50 hover:text-black"
                                    : "text-white/65 hover:text-white"
                            }
                        `}
                    >
                        Discover

                        {location.pathname === "/" && (
                            <span
                                className={`
                                    absolute -bottom-2 left-0 right-0
                                    h-px
                                    ${
                                        lightNav
                                            ? "bg-black"
                                            : "bg-white"
                                    }
                                `}
                            />
                        )}
                    </Link>

                    <Link
                        to="/search"
                        className={`
                            text-[13px] tracking-wide transition-colors
                            ${
                                location.pathname.startsWith("/search")
                                    ? lightNav
                                        ? "text-black"
                                        : "text-white"
                                    : lightNav
                                    ? "text-black/50 hover:text-black"
                                    : "text-white/65 hover:text-white"
                            }
                        `}
                    >
                        Restaurants
                    </Link>

                    <button
                        onClick={handleDashboardClick}
                        className={`
                            text-[13px] tracking-wide transition-colors
                            cursor-pointer
                            ${
                                location.pathname === "/dashboard"
                                    ? lightNav
                                        ? "text-black"
                                        : "text-white"
                                    : lightNav
                                    ? "text-black/50 hover:text-black"
                                    : "text-white/65 hover:text-white"
                            }
                        `}
                    >
                        My Bookings
                    </button>
                </div>

                {/* RIGHT SIDE */}
                <div className="hidden md:flex items-center gap-6">
                    {user ? (
                        <div className="relative">
                            <button
                                onClick={() =>
                                    setDropdownOpen(!dropdownOpen)
                                }
                                className={`
                                    flex items-center gap-2
                                    text-sm cursor-pointer
                                    ${
                                        lightNav
                                            ? "text-black"
                                            : "text-white"
                                    }
                                `}
                            >
                                <span
                                    className="
                                        w-8 h-8 rounded-full
                                        bg-amber-100
                                        text-black
                                        flex items-center justify-center
                                        text-xs uppercase
                                    "
                                >
                                    {user.name.charAt(0)}
                                </span>

                                <span className="max-w-[110px] truncate">
                                    {user.name.split(" ")[0]}
                                </span>
                            </button>

                            {dropdownOpen && (
                                <div className="absolute right-0 mt-3 w-60 bg-white border border-black/10 shadow-2xl rounded-xl py-2 overflow-hidden">

                                    <div className="px-4 py-3 border-b border-black/5">
                                        <p className="text-sm text-black truncate">
                                            {user.name}
                                        </p>

                                        <p className="text-xs text-black/45 truncate mt-1">
                                            {user.email}
                                        </p>
                                    </div>

                                    <button
                                        onClick={handleDashboardClick}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-xs text-black/60 hover:bg-black/[0.03] hover:text-black transition cursor-pointer text-left"
                                    >
                                        <LayoutDashboard size={15} />
                                        My Bookings
                                    </button>

                                    {user.role === "admin" && (
                                        <Link
                                            to="/admin/dashboard"
                                            className="flex items-center gap-3 px-4 py-3 text-xs text-black/60 hover:bg-black/[0.03] hover:text-black transition"
                                        >
                                            <ShieldCheck size={15} />
                                            Admin Panel
                                        </Link>
                                    )}

                                    {user.role === "owner" && (
                                        <Link
                                            to="/owner/dashboard"
                                            className="flex items-center gap-3 px-4 py-3 text-xs text-black/60 hover:bg-black/[0.03] hover:text-black transition"
                                        >
                                            <ShieldCheck size={15} />
                                            Owner Panel
                                        </Link>
                                    )}

                                    <button
                                        onClick={logout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-xs text-red-500 hover:bg-red-50 transition border-t border-black/5 text-left cursor-pointer"
                                    >
                                        <LogOut size={15} />
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <>
                            <button
                                onClick={() => setAuthModalOpen(true)}
                                className={`
                                    text-[13px] tracking-wide
                                    cursor-pointer transition
                                    ${
                                        lightNav
                                            ? "text-black/55 hover:text-black"
                                            : "text-white/75 hover:text-white"
                                    }
                                `}
                            >
                                Sign In
                            </button>

                            <button
                                onClick={() => setAuthModalOpen(true)}
                                className="
                                    bg-white text-black
                                    px-6 py-3
                                    rounded-full
                                    text-[10px]
                                    tracking-[0.2em]
                                    uppercase
                                    font-medium
                                    hover:bg-amber-200
                                    transition-all duration-300
                                    cursor-pointer
                                    shadow-lg
                                "
                            >
                                Join Dineora
                            </button>
                        </>
                    )}
                </div>

                {/* MOBILE BUTTON */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className={`
                        md:hidden p-2 cursor-pointer
                        ${
                            lightNav
                                ? "text-black"
                                : "text-white"
                        }
                    `}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? (
                        <X size={24} />
                    ) : (
                        <Menu size={24} />
                    )}
                </button>
            </div>

            {/* MOBILE MENU */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-black/5 px-6 py-7">

                    <div className="flex flex-col gap-6">
                        <Link
                            to="/"
                            className="text-base text-black hover:text-amber-600 transition"
                        >
                            Discover
                        </Link>

                        <Link
                            to="/search"
                            className="text-base text-black hover:text-amber-600 transition"
                        >
                            Restaurants
                        </Link>

                        <button
                            onClick={handleDashboardClick}
                            className="text-base text-black text-left cursor-pointer hover:text-amber-600 transition"
                        >
                            My Bookings
                        </button>

                        <div className="border-t border-black/10 pt-5">
                            {user ? (
                                <div className="flex flex-col gap-4">
                                    <div>
                                        <p className="text-sm text-black">
                                            {user.name}
                                        </p>
                                        <p className="text-xs text-black/45 mt-1">
                                            {user.email}
                                        </p>
                                    </div>

                                    <Link
                                        to="/dashboard"
                                        className="text-sm text-black/60"
                                    >
                                        My Bookings
                                    </Link>

                                    {user.role === "admin" && (
                                        <Link
                                            to="/admin/dashboard"
                                            className="text-sm text-black/60"
                                        >
                                            Admin Panel
                                        </Link>
                                    )}

                                    {user.role === "owner" && (
                                        <Link
                                            to="/owner/dashboard"
                                            className="text-sm text-black/60"
                                        >
                                            Owner Panel
                                        </Link>
                                    )}

                                    <button
                                        onClick={logout}
                                        className="text-sm text-red-500 text-left cursor-pointer"
                                    >
                                        Sign Out
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <button
                                        onClick={() =>
                                            setAuthModalOpen(true)
                                        }
                                        className="w-full border border-black/15 rounded-full py-3 text-sm cursor-pointer"
                                    >
                                        Sign In
                                    </button>

                                    <button
                                        onClick={() =>
                                            setAuthModalOpen(true)
                                        }
                                        className="w-full bg-black text-white rounded-full py-3 text-xs tracking-widest uppercase cursor-pointer"
                                    >
                                        Join Dineora
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}