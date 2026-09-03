/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    Star,
    Quote,
    MessageCircle,
} from "lucide-react";

interface RestaurantReviewsProps {
    restaurant: any;
}

export default function RestaurantReviews({
    restaurant,
}: RestaurantReviewsProps) {
    const reviews = [
        {
            name: "Aarav Mehta",
            date: "2 weeks ago",
            rating: 5,
            text: "An exceptional dining experience. Every course felt thoughtfully prepared, and the service was effortlessly attentive.",
        },
        {
            name: "Meera Kapoor",
            date: "1 month ago",
            rating: 5,
            text: "Beautiful ambience, wonderful food and an incredibly warm team. Definitely one of those places you want to return to.",
        },
        {
            name: "Rohan Malhotra",
            date: "2 months ago",
            rating: 4,
            text: "The flavours were refined without being overwhelming. A lovely evening from start to finish.",
        },
    ];

    if (!restaurant) return null;

    return (
        <section className="space-y-12">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                <div>
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-px bg-[#9a7628]" />

                        <span className="text-[9px] tracking-[0.25em] uppercase text-[#80621f] font-medium">
                            Guest Experiences
                        </span>
                    </div>

                    <h2 className="font-display text-3xl md:text-4xl font-medium text-[#171717] leading-tight">
                        Words from
                        <span className="block italic font-normal">
                            the table.
                        </span>
                    </h2>
                </div>

                {/* RATING */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                                key={star}
                                size={14}
                                fill="#9a7628"
                                className="text-[#9a7628]"
                            />
                        ))}
                    </div>

                    <div className="h-5 w-px bg-black/10" />

                    <div>
                        <span className="text-sm font-medium text-black/75">
                            4.8
                        </span>

                        <span className="ml-1 text-xs text-black/35">
                            · 126 reviews
                        </span>
                    </div>
                </div>
            </div>

            {/* REVIEWS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {reviews.map((review, index) => (
                    <article
                        key={index}
                        className="
                            group
                            relative
                            rounded-[22px]
                            border
                            border-black/[0.08]
                            bg-white
                            p-6
                            md:p-7
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_18px_50px_rgba(0,0,0,0.07)]
                        "
                    >
                        {/* QUOTE ICON */}
                        <div className="
                            w-9
                            h-9
                            rounded-full
                            bg-[#9a7628]/[0.07]
                            flex
                            items-center
                            justify-center
                            mb-6
                        ">
                            <Quote
                                size={15}
                                strokeWidth={1.4}
                                className="text-[#80621f]"
                            />
                        </div>

                        {/* REVIEW */}
                        <p className="
                            text-sm
                            text-black/60
                            leading-[1.8]
                            min-h-[100px]
                        ">
                            “{review.text}”
                        </p>

                        {/* DIVIDER */}
                        <div className="h-px bg-black/[0.07] my-6" />

                        {/* USER */}
                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-sm font-medium text-black/75">
                                    {review.name}
                                </p>

                                <p className="text-[10px] text-black/30 mt-1">
                                    {review.date}
                                </p>
                            </div>

                            <div className="flex items-center gap-1">
                                <Star
                                    size={12}
                                    fill="#9a7628"
                                    className="text-[#9a7628]"
                                />

                                <span className="text-xs text-black/50">
                                    {review.rating}.0
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {/* BOTTOM CTA */}
            <div className="
                flex
                flex-col
                sm:flex-row
                items-start
                sm:items-center
                justify-between
                gap-5
                pt-8
                border-t
                border-black/[0.08]
            ">
                <div className="flex items-center gap-3">
                    <div className="
                        w-9
                        h-9
                        rounded-full
                        bg-black/[0.035]
                        flex
                        items-center
                        justify-center
                    ">
                        <MessageCircle
                            size={15}
                            strokeWidth={1.4}
                            className="text-black/45"
                        />
                    </div>

                    <div>
                        <p className="text-xs text-black/65">
                            Have you dined here?
                        </p>

                        <p className="text-[10px] text-black/30 mt-0.5">
                            Share your experience with the Dineora community.
                        </p>
                    </div>
                </div>

                <button
                    className="
                        px-5
                        py-2.5
                        rounded-full
                        border
                        border-black/10
                        text-[10px]
                        tracking-[0.12em]
                        uppercase
                        text-black/60
                        hover:bg-black
                        hover:text-white
                        hover:border-black
                        transition-all
                        cursor-pointer
                    "
                >
                    Write a review
                </button>
            </div>
        </section>
    );
}