/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import RestaurantCard from "../RestaurantCard.tsx";

interface TrendingRowProps {
    trending: any[];
    loading: boolean;
}

export default function TrendingRow({
    trending,
    loading,
}: TrendingRowProps) {
    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#9a7628]/[0.035] rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-10 relative">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <Sparkles
                                size={13}
                                className="text-[#9a7628]"
                            />

                            <span className="text-[10px] text-[#80621f] tracking-[0.3em] uppercase">
                                Curated for you
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl text-[#171717] leading-tight">
                            Trending
                            <span className="italic font-normal ml-2">
                                tables.
                            </span>
                        </h2>

                        <p className="mt-4 text-sm text-black/45 max-w-lg leading-relaxed">
                            The places everyone's talking about.
                            Discover standout restaurants worth making
                            a reservation for.
                        </p>
                    </div>

                    <Link
                        to="/search"
                        className="
                            group
                            inline-flex items-center gap-3
                            text-[10px]
                            tracking-[0.2em]
                            uppercase
                            text-black/55
                            hover:text-[#80621f]
                            transition-colors
                            pb-2
                            border-b border-black/15
                            hover:border-[#80621f]
                        "
                    >
                        Explore restaurants

                        <ArrowRight
                            size={15}
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </Link>
                </div>

                {/* Restaurants */}
                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="
                                    h-[420px]
                                    bg-[#f5f3ef]
                                    animate-pulse
                                "
                            />
                        ))}
                    </div>
                ) : trending.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {trending.slice(0, 3).map((restaurant) => (
                            <RestaurantCard
                                key={restaurant._id}
                                restaurant={restaurant}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="py-20 text-center border border-black/5 bg-[#faf9f6]">
                        <p className="font-display text-2xl text-black/60">
                            New tables are coming soon.
                        </p>

                        <p className="mt-2 text-sm text-black/40">
                            Check back shortly for our latest discoveries.
                        </p>
                    </div>
                )}

                {/* Bottom statement */}
                {!loading && trending.length > 0 && (
                    <div className="mt-14 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-[10px] tracking-[0.2em] uppercase text-black/35">
                            Handpicked dining experiences
                        </p>

                        <div className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-black/40">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9a7628]" />
                            Updated regularly
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}