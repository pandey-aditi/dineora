import { Link, useNavigate } from "react-router-dom";
import { Star, MapPinIcon, ArrowUpRight } from "lucide-react";
import { dummyRating } from "../assets/assets.ts";

interface RestaurantCardProps {
    restaurant: {
        _id: string;
        name: string;
        slug: string;
        cuisine: string;
        priceRange: string;
        rating: number;
        reviewCount: number;
        location: string;
        image: string;
        availableSlots: string[];
        featured?: boolean;
        exclusive?: boolean;
    };
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
    const navigate = useNavigate();

    const handleSlotClick = (e: React.MouseEvent, slot: string) => {
        e.preventDefault();
        e.stopPropagation();

        const today = new Date().toISOString().split("T")[0];

        navigate(
            `/booking/${restaurant.slug}?slot=${slot}&date=${today}`
        );
    };

    const rating =
        restaurant.rating || dummyRating;

    return (
        <article
            className="
                group
                relative
                bg-white
                border border-black/[0.07]
                overflow-hidden
                flex flex-col
                h-full
                rounded-2xl
                transition-all duration-500
                hover:-translate-y-1
                hover:shadow-[0_24px_60px_rgba(0,0,0,0.10)]
            "
        >
            {/* IMAGE */}
            <Link
                to={`/restaurant/${restaurant.slug}`}
                className="relative h-64 overflow-hidden block"
            >
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="
                        w-full h-full object-cover
                        transition-transform duration-700
                        group-hover:scale-105
                    "
                    loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {/* Top right arrow */}
                <div
                    className="
                        absolute top-4 right-4
                        w-9 h-9
                        rounded-full
                        bg-white/90
                        backdrop-blur
                        flex items-center justify-center
                        opacity-0
                        translate-y-2
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all duration-300
                    "
                >
                    <ArrowUpRight
                        size={16}
                        className="text-black"
                    />
                </div>

                {/* Badges */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                    {restaurant.exclusive && (
                        <span
                            className="
                                text-[9px]
                                font-medium
                                tracking-[0.18em]
                                text-white
                                bg-black/75
                                backdrop-blur
                                px-3 py-1.5
                                uppercase
                            "
                        >
                            Exclusive
                        </span>
                    )}

                    {restaurant.featured && (
                        <span
                            className="
                                text-[9px]
                                font-medium
                                tracking-[0.18em]
                                text-black
                                bg-[#e8c978]
                                px-3 py-1.5
                                uppercase
                            "
                        >
                            Recommended
                        </span>
                    )}
                </div>
            </Link>

            {/* CONTENT */}
            <div className="p-5 md:p-6 flex-1 flex flex-col">

                {/* Cuisine + Rating */}
                <div className="flex justify-between items-center gap-4 mb-3">
                    <span
                        className="
                            text-[10px]
                            font-medium
                            text-[#80621f]
                            tracking-[0.18em]
                            uppercase
                        "
                    >
                        {restaurant.cuisine}
                    </span>

                    <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] text-black/40">
                            {restaurant.priceRange}
                        </span>

                        <span className="text-black/15">
                            •
                        </span>

                        <div className="flex items-center gap-1">
                            <Star
                                size={12}
                                fill="currentColor"
                                className="text-[#9a7628]"
                            />

                            <span className="text-xs font-medium text-black/75">
                                {rating.toFixed(1)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Name */}
                <Link
                    to={`/restaurant/${restaurant.slug}`}
                    className="block"
                >
                    <h3
                        className="
                            font-display
                            text-xl
                            text-[#171717]
                            leading-tight
                            group-hover:text-[#80621f]
                            transition-colors duration-300
                            line-clamp-1
                        "
                    >
                        {restaurant.name}
                    </h3>
                </Link>

                {/* Location */}
                <p className="mt-2 text-xs text-black/45 flex items-center gap-1.5">
                    <MapPinIcon
                        size={13}
                        className="text-black/35"
                    />

                    {restaurant.location}
                </p>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Reservation */}
                <div className="mt-5 pt-4 border-t border-black/[0.07]">
                    <div className="flex items-center justify-between mb-3">
                        <span
                            className="
                                text-[9px]
                                font-medium
                                text-black/40
                                tracking-[0.18em]
                                uppercase
                            "
                        >
                            Quick reservation
                        </span>

                        <span className="text-[9px] text-black/25">
                            Today
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                        {restaurant.availableSlots
                            .filter((slot) => {
                                const [
                                    slotHour,
                                    slotMinute,
                                ] = slot
                                    .split(":")
                                    .map(Number);

                                const now = new Date();

                                return (
                                    slotHour >
                                        now.getHours() ||
                                    (slotHour ===
                                        now.getHours() &&
                                        slotMinute >
                                            now.getMinutes())
                                );
                            })
                            .slice(0, 3)
                            .map((slot) => (
                                <button
                                    key={slot}
                                    onClick={(e) =>
                                        handleSlotClick(
                                            e,
                                            slot
                                        )
                                    }
                                    className="
                                        text-[10px]
                                        font-medium
                                        border
                                        border-black/10
                                        bg-[#faf9f6]
                                        text-black/60
                                        px-3 py-2
                                        rounded-lg
                                        hover:border-[#9a7628]
                                        hover:text-[#80621f]
                                        hover:bg-[#9a7628]/5
                                        transition-all
                                        cursor-pointer
                                    "
                                >
                                    {slot}
                                </button>
                            ))}

                        <Link
                            to={`/restaurant/${restaurant.slug}`}
                            className="
                                text-[10px]
                                font-medium
                                border
                                border-[#9a7628]/30
                                text-[#80621f]
                                px-3 py-2
                                rounded-lg
                                hover:bg-[#80621f]
                                hover:text-white
                                transition-all
                            "
                        >
                            All slots
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}