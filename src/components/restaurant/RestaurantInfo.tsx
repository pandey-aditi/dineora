/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    MapPin,
    Clock,
    Utensils,
    ChefHat,
    ArrowUpRight,
} from "lucide-react";

interface RestaurantInfoProps {
    restaurant: any;
}

export default function RestaurantInfo({
    restaurant,
}: RestaurantInfoProps) {
    if (!restaurant) return null;

    return (
        <div className="space-y-14 text-left">

            {/* INFO STRIP */}
            <div className="grid grid-cols-1 sm:grid-cols-3 border-y border-black/[0.08]">

                {/* Chef */}
                <div className="flex items-center gap-4 py-6 sm:justify-center sm:border-r border-black/[0.08]">
                    <div className="w-10 h-10 rounded-full bg-[#9a7628]/[0.07] flex items-center justify-center shrink-0">
                        <ChefHat
                            size={18}
                            strokeWidth={1.3}
                            className="text-[#80621f]"
                        />
                    </div>

                    <div>
                        <span className="block text-[8px] tracking-[0.22em] text-black/35 uppercase mb-1">
                            Chef
                        </span>

                        <span className="text-sm text-black/75 font-display">
                            {restaurant.chef}
                        </span>
                    </div>
                </div>

                {/* Cuisine */}
                <div className="flex items-center gap-4 py-6 sm:justify-center sm:border-r border-black/[0.08]">
                    <div className="w-10 h-10 rounded-full bg-[#9a7628]/[0.07] flex items-center justify-center shrink-0">
                        <Utensils
                            size={18}
                            strokeWidth={1.3}
                            className="text-[#80621f]"
                        />
                    </div>

                    <div>
                        <span className="block text-[8px] tracking-[0.22em] text-black/35 uppercase mb-1">
                            Cuisine
                        </span>

                        <span className="text-sm text-black/75 font-display">
                            {restaurant.cuisine}
                        </span>
                    </div>
                </div>

                {/* Opening */}
                <div className="flex items-center gap-4 py-6 sm:justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#9a7628]/[0.07] flex items-center justify-center shrink-0">
                        <Clock
                            size={18}
                            strokeWidth={1.3}
                            className="text-[#80621f]"
                        />
                    </div>

                    <div>
                        <span className="block text-[8px] tracking-[0.22em] text-black/35 uppercase mb-1">
                            Opening
                        </span>

                        <span className="text-sm text-black/75 font-display">
                            5:00 PM — 11:00 PM
                        </span>
                    </div>
                </div>
            </div>

            {/* ABOUT */}
            <section className="grid grid-cols-1 md:grid-cols-[0.8fr_1.4fr] gap-8 md:gap-16">

                {/* Heading */}
                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#9a7628]" />

                        <span className="text-[9px] tracking-[0.25em] uppercase text-[#80621f] font-medium">
                            The Experience
                        </span>
                    </div>

                    <h3 className="font-display text-3xl md:text-4xl font-medium text-[#171717] leading-tight">
                        About the
                        <span className="block italic font-normal">
                            dining room.
                        </span>
                    </h3>
                </div>

                {/* Description */}
                <div>
                    <p className="text-sm md:text-base text-black/55 leading-[1.9]">
                        {restaurant.description}
                    </p>

                    {/* Address */}
                    <div className="mt-8 pt-6 border-t border-black/[0.08] flex items-start justify-between gap-6">

                        <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-full bg-black/[0.035] flex items-center justify-center shrink-0">
                                <MapPin
                                    size={15}
                                    strokeWidth={1.5}
                                    className="text-black/50"
                                />
                            </div>

                            <div>
                                <span className="block text-[8px] tracking-[0.2em] uppercase text-black/30 mb-1">
                                    Location
                                </span>

                                <span className="text-xs text-black/60 leading-relaxed">
                                    {restaurant.address}
                                </span>
                            </div>
                        </div>

                        <button
                            className="hidden sm:flex w-9 h-9 rounded-full border border-black/10 items-center justify-center text-black/40 hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer"
                            aria-label="View location"
                        >
                            <ArrowUpRight size={15} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}