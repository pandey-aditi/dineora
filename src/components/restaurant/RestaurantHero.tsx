/* eslint-disable @typescript-eslint/no-explicit-any */

import { Star, MapPin, ArrowDown } from "lucide-react";
import { dummyRating, dummyReviewCount } from "../../assets/assets.ts";

interface RestaurantHeroProps {
    restaurant: any;
}

export default function RestaurantHero({
    restaurant,
}: RestaurantHeroProps) {
    if (!restaurant) return null;

    return (
        <section className="relative h-[560px] md:h-[620px] w-full overflow-hidden bg-black text-left">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src={restaurant.image}
                    alt={restaurant.name}
                    className="
                        w-full h-full
                        object-cover
                        scale-105
                        transition-transform
                        duration-[2000ms]
                    "
                />

                {/* Cinematic overlays */}
                <div className="absolute inset-0 bg-black/25" />

                <div className="
                    absolute inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/25
                    to-black/35
                " />

                <div className="
                    absolute inset-0
                    bg-gradient-to-r
                    from-black/40
                    via-transparent
                    to-black/10
                " />
            </div>

            {/* Top subtle label */}
            <div className="absolute top-28 left-0 right-0">
                <div className="max-w-7xl mx-auto px-6 md:px-10">
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-px bg-amber-300/80" />

                        <span className="
                            text-[10px]
                            tracking-[0.3em]
                            uppercase
                            text-amber-200
                        ">
                            Dineora Selection
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Information */}
            <div className="
                absolute
                bottom-0
                left-0
                right-0
                pb-10
                md:pb-14
            ">
                <div className="
                    max-w-7xl
                    mx-auto
                    px-6 md:px-10
                    flex flex-col
                    md:flex-row
                    md:items-end
                    md:justify-between
                    gap-8
                ">

                    {/* Restaurant Info */}
                    <div className="max-w-3xl">

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 items-center mb-5">

                            <span className="
                                text-[9px]
                                font-medium
                                tracking-[0.2em]
                                text-black
                                bg-amber-200
                                px-3
                                py-1.5
                                uppercase
                            ">
                                {restaurant.cuisine}
                            </span>

                            {restaurant.exclusive && (
                                <span className="
                                    text-[9px]
                                    font-medium
                                    tracking-[0.2em]
                                    text-white
                                    bg-white/10
                                    backdrop-blur-md
                                    border border-white/20
                                    px-3
                                    py-1.5
                                    uppercase
                                ">
                                    Exclusive
                                </span>
                            )}
                        </div>

                        {/* Restaurant Name */}
                        <h1 className="
                            font-display
                            text-5xl
                            md:text-6xl
                            lg:text-7xl
                            font-medium
                            text-white
                            tracking-[-0.025em]
                            leading-[0.95]
                        ">
                            {restaurant.name}
                        </h1>

                        {/* Meta */}
                        <div className="
                            mt-6
                            flex
                            flex-wrap
                            items-center
                            gap-x-4
                            gap-y-3
                            text-xs
                            text-white/70
                        ">

                            {/* Rating */}
                            <div className="flex items-center gap-1.5">
                                <Star
                                    size={14}
                                    fill="currentColor"
                                    className="text-amber-300"
                                />

                                <span className="text-white font-medium">
                                    {dummyRating.toFixed(1)}
                                </span>

                                <span>
                                    ({dummyReviewCount} reviews)
                                </span>
                            </div>

                            <span className="text-white/25">•</span>

                            {/* Price */}
                            <span>
                                {restaurant.priceRange}
                            </span>

                            <span className="text-white/25">•</span>

                            {/* Location */}
                            <div className="flex items-center gap-1.5">
                                <MapPin size={13} />
                                <span>
                                    {restaurant.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="
                        hidden
                        md:flex
                        flex-col
                        items-center
                        gap-2
                        text-white/45
                        pb-1
                    ">
                        <span className="
                            text-[8px]
                            tracking-[0.25em]
                            uppercase
                            [writing-mode:vertical-rl]
                        ">
                            Discover
                        </span>

                        <ArrowDown
                            size={15}
                            className="animate-bounce"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom border */}
            <div className="
                absolute
                bottom-0
                left-0
                right-0
                h-px
                bg-white/15
            " />
        </section>
    );
}