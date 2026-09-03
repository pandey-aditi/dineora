import toast from "react-hot-toast";
import { ArrowRight, Mail } from "lucide-react";

export default function NewsletterCTA() {
    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Welcome to the Dineora Inner Circle.");
    };

    return (
        <section className="bg-[#171717] text-white py-24 xl:py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">

                {/* LABEL */}
                <div className="flex items-center justify-center gap-3 mb-7">
                    <span className="w-8 h-px bg-[#b08a35]" />

                    <span className="text-[9px] tracking-[0.3em] uppercase text-[#c5a45d]">
                        The Inner Circle
                    </span>

                    <span className="w-8 h-px bg-[#b08a35]" />
                </div>

                {/* HEADING */}
                <h2 className="
                    font-display
                    text-4xl
                    md:text-5xl
                    font-medium
                    leading-tight
                    mb-5
                ">
                    A seat at the table,
                    <span className="block italic font-normal text-white/80">
                        before everyone else.
                    </span>
                </h2>

                <p className="
                    max-w-xl
                    mx-auto
                    text-sm
                    text-white/45
                    leading-[1.9]
                    mb-10
                ">
                    Join the Dineora Inner Circle for new restaurant openings,
                    seasonal menus and carefully selected dining experiences.
                </p>

                {/* FORM */}
                <form
                    onSubmit={handleSubscribe}
                    className="
                        max-w-lg
                        mx-auto
                        flex
                        flex-col
                        sm:flex-row
                        gap-2
                    "
                >
                    <div className="
                        flex
                        flex-1
                        items-center
                        gap-3
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-5
                        focus-within:border-[#b08a35]/60
                        transition-all
                    ">
                        <Mail
                            size={16}
                            strokeWidth={1.4}
                            className="text-white/30 shrink-0"
                        />

                        <input
                            type="email"
                            required
                            placeholder="Your email address"
                            className="
                                w-full
                                bg-transparent
                                text-sm
                                text-white
                                py-3.5
                                outline-none
                                placeholder:text-white/25
                            "
                        />
                    </div>

                    <button
                        type="submit"
                        className="
                            group
                            rounded-full
                            bg-[#b08a35]
                            hover:bg-[#c19a4a]
                            text-white
                            px-6
                            py-3.5
                            text-[10px]
                            tracking-[0.16em]
                            uppercase
                            flex
                            items-center
                            justify-center
                            gap-3
                            transition-all
                            cursor-pointer
                        "
                    >
                        Subscribe

                        <ArrowRight
                            size={14}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </form>

                {/* FOOTNOTE */}
                <p className="
                    mt-6
                    text-[9px]
                    tracking-[0.12em]
                    uppercase
                    text-white/20
                ">
                    No noise. Only exceptional tables.
                </p>

            </div>
        </section>
    );
}