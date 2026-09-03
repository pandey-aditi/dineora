import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Calendar, Users, ArrowRight } from "lucide-react";
import { assets } from "../../assets/assets";

export default function Hero() {
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");
    const [guests, setGuests] = useState("2");

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (searchQuery) params.append("search", searchQuery);
        if (location) params.append("location", location);
        if (date) params.append("date", date);
        if (guests) params.append("guests", guests);

        navigate(`/search?${params.toString()}`);
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    src={assets.hero_bg_img}
                    alt="Luxury restaurant dining experience"
                    className="w-full h-full object-cover scale-105"
                />

                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/75" />
            </div>

            {/* Decorative glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

            {/* Main Content */}
            <div className="relative z-10 w-full max-w-7xl px-5 md:px-10 pt-20 text-center">

                {/* Eyebrow */}
                <div className="flex items-center justify-center gap-4 mb-6">
                    <span className="w-10 h-px bg-amber-300/70" />

                    <span className="text-[11px] md:text-xs text-amber-200 tracking-[0.35em] uppercase font-medium">
                        The Art of Dining
                    </span>

                    <span className="w-10 h-px bg-amber-300/70" />
                </div>

                {/* Brand */}
                <p className="text-white/70 text-sm tracking-[0.45em] uppercase mb-5">
                    Dineora
                </p>

                {/* Heading */}
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[84px] text-white max-w-5xl mx-auto leading-[0.98] font-medium tracking-[-0.025em] drop-shadow-2xl">
                    Where every table
                    <span className="block italic text-amber-200">
                        tells a story.
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-xl mx-auto mt-7 mb-10 text-sm md:text-base text-white/75 leading-relaxed">
                    Discover exceptional restaurants, hidden gems, and unforgettable
                    dining experiences — all in one place.
                </p>

                {/* Search Box */}
                <form
                    onSubmit={handleSearchSubmit}
                    className="
                        max-w-6xl mx-auto
                        bg-white/95 backdrop-blur-xl
                        p-2
                        rounded-2xl
                        shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                        border border-white/30
                        flex flex-col lg:flex-row
                        gap-1.5
                    "
                >
                    {/* Search */}
                    <div className="flex-1 flex items-center px-4 py-3.5 rounded-xl hover:bg-black/[0.03] transition">
                        <Search
                            className="text-black/45 mr-3 shrink-0"
                            size={18}
                        />

                        <input
                            className="w-full bg-transparent border-none focus:outline-none text-sm text-black placeholder:text-black/45"
                            placeholder="Cuisine or restaurant"
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    {/* Location */}
                    <div className="flex-1 flex items-center px-4 py-3.5 rounded-xl hover:bg-black/[0.03] transition border-t lg:border-t-0 lg:border-l border-black/10">
                        <MapPin
                            className="text-black/45 mr-3 shrink-0"
                            size={18}
                        />

                        <input
                            className="w-full bg-transparent border-none focus:outline-none text-sm text-black placeholder:text-black/45"
                            placeholder="Where are you dining?"
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>

                    {/* Date */}
                    <div className="flex-1 flex items-center px-4 py-3.5 rounded-xl hover:bg-black/[0.03] transition border-t lg:border-t-0 lg:border-l border-black/10">
                        <Calendar
                            className="text-black/45 mr-3 shrink-0"
                            size={18}
                        />

                        <input
                            className="w-full bg-transparent border-none focus:outline-none text-sm text-black cursor-pointer"
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    {/* Guests */}
                    <div className="flex-1 flex items-center px-4 py-3.5 rounded-xl hover:bg-black/[0.03] transition border-t lg:border-t-0 lg:border-l border-black/10">
                        <Users
                            className="text-black/45 mr-3 shrink-0"
                            size={18}
                        />

                        <select
                            className="w-full bg-transparent border-none focus:outline-none text-sm text-black cursor-pointer"
                            value={guests}
                            onChange={(e) => setGuests(e.target.value)}
                        >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8 Guests</option>
                        </select>
                    </div>

                    {/* CTA */}
                    <button
                        type="submit"
                        className="
                            group
                            lg:min-w-[190px]
                            flex items-center justify-center gap-3
                            bg-black
                            text-white
                            rounded-xl
                            px-7 py-4
                            text-[11px]
                            tracking-[0.2em]
                            uppercase
                            font-medium
                            hover:bg-amber-600
                            transition-all duration-300
                            cursor-pointer
                        "
                    >
                        Find a table

                        <ArrowRight
                            size={16}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </button>
                </form>

                {/* Bottom trust line */}
                <div className="mt-8 flex items-center justify-center gap-3 text-white/55 text-[10px] md:text-xs tracking-[0.18em] uppercase">
                    <span>Curated restaurants</span>
                    <span className="w-1 h-1 rounded-full bg-amber-300" />
                    <span>Effortless reservations</span>
                    <span className="w-1 h-1 rounded-full bg-amber-300" />
                    <span>Memorable evenings</span>
                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
        </section>
    );
}