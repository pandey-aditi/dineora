import { assets } from "../../assets/assets";
import { BadgeCheck, Armchair, ArrowUpRight } from "lucide-react";

export default function MembershipSection() {
    return (
        <section className="py-24 xl:py-32 bg-[#f7f5f0] px-6 md:px-10">
            <div className="max-w-7xl mx-auto">

                {/* TOP LABEL */}
                <div className="flex items-center gap-3 mb-10">
                    <span className="w-8 h-px bg-[#9a7628]" />

                    <span className="text-[9px] tracking-[0.25em] uppercase text-[#80621f] font-medium">
                        The Dineora Circle
                    </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* IMAGE */}
                    <div className="lg:col-span-7 relative group">
                        <div className="aspect-[1.35/1] overflow-hidden rounded-[28px]">
                            <img
                                src={assets.membership_section_img}
                                alt="Chef's Table"
                                className="
                                    w-full
                                    h-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-[1.04]
                                "
                            />
                        </div>

                        {/* IMAGE BADGE */}
                        <div className="
                            absolute
                            bottom-5
                            left-5
                            sm:bottom-7
                            sm:left-7
                            bg-white/95
                            backdrop-blur-md
                            rounded-full
                            px-4
                            py-2.5
                            flex
                            items-center
                            gap-2
                            shadow-lg
                        ">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#9a7628]" />

                            <span className="
                                text-[9px]
                                tracking-[0.15em]
                                uppercase
                                text-black/60
                            ">
                                By invitation, for those who savour more
                            </span>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="lg:col-span-5 lg:pl-4">

                        <p className="
                            text-[9px]
                            tracking-[0.22em]
                            uppercase
                            text-[#80621f]
                            mb-4
                        ">
                            Premium Club Membership
                        </p>

                        <h2 className="
                            font-display
                            text-4xl
                            md:text-5xl
                            text-[#171717]
                            font-medium
                            leading-[1.08]
                            mb-6
                        ">
                            Access the
                            <span className="block italic font-normal">
                                extraordinary.
                            </span>
                        </h2>

                        <p className="
                            text-sm
                            text-black/50
                            leading-[1.9]
                            mb-9
                        ">
                            Join the Dineora Circle and receive priority access
                            to seasonal chef collaborations, private dining
                            events, and tables worth travelling for.
                        </p>

                        {/* BENEFITS */}
                        <div className="space-y-6">

                            <div className="flex gap-4">
                                <div className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#9a7628]/[0.08]
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                ">
                                    <BadgeCheck
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-[#80621f]"
                                    />
                                </div>

                                <div>
                                    <h4 className="
                                        text-sm
                                        font-medium
                                        text-black/75
                                        mb-1
                                    ">
                                        Last-Minute Reservations
                                    </h4>

                                    <p className="
                                        text-xs
                                        text-black/45
                                        leading-relaxed
                                    ">
                                        Unlock tables held exclusively for
                                        members during peak evenings.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="
                                    w-10
                                    h-10
                                    rounded-full
                                    bg-[#9a7628]/[0.08]
                                    flex
                                    items-center
                                    justify-center
                                    shrink-0
                                ">
                                    <Armchair
                                        size={18}
                                        strokeWidth={1.4}
                                        className="text-[#80621f]"
                                    />
                                </div>

                                <div>
                                    <h4 className="
                                        text-sm
                                        font-medium
                                        text-black/75
                                        mb-1
                                    ">
                                        Curated Tasting Invites
                                    </h4>

                                    <p className="
                                        text-xs
                                        text-black/45
                                        leading-relaxed
                                    ">
                                        Receive personalized invitations to
                                        intimate chef-led tasting experiences.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* SMALL FOOTER */}
                        <div className="
                            mt-10
                            pt-6
                            border-t
                            border-black/[0.08]
                            flex
                            items-center
                            justify-between
                        ">
                            <span className="
                                text-[9px]
                                tracking-[0.14em]
                                uppercase
                                text-black/35
                            ">
                                A more considered way to dine
                            </span>

                            <div className="
                                w-9
                                h-9
                                rounded-full
                                border
                                border-black/10
                                flex
                                items-center
                                justify-center
                                text-black/40
                            ">
                                <ArrowUpRight size={15} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}