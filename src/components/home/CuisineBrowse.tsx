import { useNavigate, Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cuisines } from "../../assets/assets";

export default function CuisineBrowse() {
    const navigate = useNavigate();

    const handleCuisineClick = (cuisineName: string) => {
        navigate(`/search?cuisine=${cuisineName}`);
    };

    return (
        <section className="py-24 md:py-32 bg-[#f7f5f1]">
            <div className="max-w-7xl mx-auto px-6 md:px-10">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-px bg-[#9a7628]" />

                            <span className="text-[10px] text-[#80621f] tracking-[0.28em] uppercase">
                                Explore the Table
                            </span>
                        </div>

                        <h2 className="font-display text-3xl md:text-5xl text-[#171717] leading-tight">
                            A world of
                            <span className="italic font-normal ml-2">
                                flavours.
                            </span>
                        </h2>

                        <p className="mt-4 text-sm text-black/50 max-w-md leading-relaxed">
                            From timeless classics to hidden culinary gems,
                            discover a table worth remembering.
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
                            text-black/60
                            hover:text-[#80621f]
                            transition-colors
                            pb-1
                            border-b border-black/20
                            hover:border-[#80621f]
                        "
                    >
                        Explore all
                        <ArrowUpRight
                            size={15}
                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                    </Link>
                </div>

                {/* Cuisine Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
                    {cuisines.map((cuisine, index) => {
                        const Icon = cuisine.icon;

                        return (
                            <button
                                key={cuisine.name}
                                onClick={() => handleCuisineClick(cuisine.name)}
                                className="
                                    group
                                    relative
                                    min-h-[190px]
                                    md:min-h-[220px]
                                    overflow-hidden
                                    bg-white
                                    border border-black/[0.06]
                                    flex flex-col
                                    items-center
                                    justify-center
                                    cursor-pointer
                                    transition-all
                                    duration-500
                                    hover:-translate-y-1
                                    hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                                "
                            >
                                {/* Number */}
                                <span
                                    className="
                                        absolute top-4 left-4
                                        text-[9px]
                                        tracking-widest
                                        text-black/20
                                        group-hover:text-[#80621f]
                                        transition-colors
                                    "
                                >
                                    0{index + 1}
                                </span>

                                {/* Arrow */}
                                <ArrowUpRight
                                    size={15}
                                    className="
                                        absolute top-4 right-4
                                        text-black/15
                                        group-hover:text-[#80621f]
                                        opacity-0
                                        group-hover:opacity-100
                                        transition-all
                                        duration-300
                                    "
                                />

                                {/* Icon */}
                                <div
                                    className="
                                        w-16 h-16
                                        rounded-full
                                        border border-black/10
                                        flex items-center justify-center
                                        mb-6
                                        group-hover:border-[#80621f]/50
                                        group-hover:bg-[#80621f]/5
                                        transition-all duration-500
                                    "
                                >
                                    <Icon
                                        size={28}
                                        strokeWidth={1}
                                        className="
                                            text-black/50
                                            group-hover:text-[#80621f]
                                            transition-colors
                                        "
                                    />
                                </div>

                                {/* Name */}
                                <span
                                    className="
                                        text-[10px]
                                        tracking-[0.2em]
                                        uppercase
                                        text-black/75
                                        group-hover:text-black
                                        transition-colors
                                    "
                                >
                                    {cuisine.label}
                                </span>

                                {/* Bottom line */}
                                <span
                                    className="
                                        absolute bottom-0 left-1/2
                                        -translate-x-1/2
                                        w-0 h-[2px]
                                        bg-[#80621f]
                                        group-hover:w-12
                                        transition-all duration-500
                                    "
                                />
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}