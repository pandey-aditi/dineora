/* eslint-disable @typescript-eslint/no-explicit-any */

import { Calendar, Users, Clock, ShieldCheck } from "lucide-react";

interface BookingWidgetProps {
    restaurant: any;
    selectedDate: string;
    setSelectedDate: (date: string) => void;
    selectedGuests: string;
    setSelectedGuests: (guests: string) => void;
    selectedSlot: string;
    setSelectedSlot: (slot: string) => void;
    slotsAvailability: any[];
    loadingSlots: boolean;
    isAuthenticated: boolean;
    handleReserveClick: () => void;
}

export default function BookingWidget({
    restaurant,
    selectedDate,
    setSelectedDate,
    selectedGuests,
    setSelectedGuests,
    selectedSlot,
    setSelectedSlot,
    slotsAvailability,
    loadingSlots,
    isAuthenticated,
    handleReserveClick,
}: BookingWidgetProps) {
    if (!restaurant) return null;

    return (
        <div
            className="
                bg-white
                border border-black/[0.08]
                rounded-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.07)]
                overflow-hidden
                text-left
            "
        >
            {/* Header */}
            <div className="px-6 pt-7 pb-5 border-b border-black/[0.07]">
                <div className="flex items-center gap-2 mb-3">
                    <span className="w-7 h-px bg-[#9a7628]" />

                    <span
                        className="
                            text-[9px]
                            tracking-[0.25em]
                            uppercase
                            text-[#80621f]
                            font-medium
                        "
                    >
                        Reservations
                    </span>
                </div>

                <h3
                    className="
                        font-display
                        text-2xl
                        text-[#171717]
                        leading-tight
                    "
                >
                    Reserve your table
                </h3>

                <p className="text-xs text-black/40 mt-2">
                    Choose your preferred date, party size and time.
                </p>
            </div>

            <div className="p-6 space-y-5">

                {/* Party Size */}
                <div className="space-y-2">
                    <label
                        className="
                            flex items-center gap-2
                            text-[9px]
                            font-medium
                            text-black/45
                            tracking-[0.2em]
                            uppercase
                        "
                    >
                        <Users size={13} />
                        Party size
                    </label>

                    <div className="relative">
                        <Users
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-black/35
                            "
                            size={16}
                        />

                        <select
                            value={selectedGuests}
                            onChange={(e) =>
                                setSelectedGuests(e.target.value)
                            }
                            className="
                                w-full
                                appearance-none
                                bg-[#faf9f6]
                                pl-11
                                pr-4
                                py-3.5
                                text-xs
                                text-black/75
                                border
                                border-black/[0.09]
                                rounded-xl
                                focus:border-[#9a7628]
                                focus:outline-none
                                transition-colors
                                cursor-pointer
                            "
                        >
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="4">4 Guests</option>
                            <option value="6">6 Guests</option>
                            <option value="8">8 Guests</option>
                        </select>
                    </div>
                </div>

                {/* Date */}
                <div className="space-y-2">
                    <label
                        className="
                            flex items-center gap-2
                            text-[9px]
                            font-medium
                            text-black/45
                            tracking-[0.2em]
                            uppercase
                        "
                    >
                        <Calendar size={13} />
                        Date
                    </label>

                    <div className="relative">
                        <Calendar
                            className="
                                absolute
                                left-4
                                top-1/2
                                -translate-y-1/2
                                text-black/35
                            "
                            size={16}
                        />

                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) =>
                                setSelectedDate(e.target.value)
                            }
                            min={
                                new Date()
                                    .toISOString()
                                    .split("T")[0]
                            }
                            className="
                                w-full
                                bg-[#faf9f6]
                                pl-11
                                pr-4
                                py-3.5
                                text-xs
                                text-black/75
                                border
                                border-black/[0.09]
                                rounded-xl
                                focus:border-[#9a7628]
                                focus:outline-none
                                transition-colors
                                cursor-pointer
                            "
                        />
                    </div>
                </div>

                {/* Time Slots */}
                <div className="space-y-3 pt-1">

                    <div className="flex items-center justify-between">
                        <label
                            className="
                                flex items-center gap-2
                                text-[9px]
                                font-medium
                                text-black/45
                                tracking-[0.2em]
                                uppercase
                            "
                        >
                            <Clock size={13} />
                            Available times
                        </label>

                        {selectedSlot && (
                            <span className="
                                text-[9px]
                                text-[#80621f]
                                tracking-wider
                                uppercase
                            ">
                                {selectedSlot} selected
                            </span>
                        )}
                    </div>

                    <div className="grid grid-cols-3 gap-2">

                        {loadingSlots ? (
                            <div className="
                                col-span-3
                                py-7
                                flex
                                justify-center
                                items-center
                            ">
                                <div className="
                                    w-5
                                    h-5
                                    border-2
                                    border-black/10
                                    border-t-[#80621f]
                                    rounded-full
                                    animate-spin
                                " />
                            </div>
                        ) : (
                            (() => {
                                const todayStr =
                                    new Date()
                                        .toISOString()
                                        .split("T")[0];

                                const isToday =
                                    selectedDate === todayStr;

                                const allSlots =
                                    slotsAvailability.length > 0
                                        ? slotsAvailability
                                        : (
                                              restaurant.availableSlots ||
                                              []
                                          ).map((s: string) => ({
                                              time: s,
                                              availableSeats: 20,
                                              isAvailable: true,
                                          }));

                                return allSlots
                                    .filter((slotInfo: any) => {
                                        if (!isToday) return true;

                                        const [
                                            slotHour,
                                            slotMinute,
                                        ] = slotInfo.time
                                            .split(":")
                                            .map(Number);

                                        const now = new Date();

                                        const currentHour =
                                            now.getHours();

                                        const currentMinute =
                                            now.getMinutes();

                                        return (
                                            slotHour >
                                                currentHour ||
                                            (slotHour ===
                                                currentHour &&
                                                slotMinute >
                                                    currentMinute)
                                        );
                                    })
                                    .map((slotInfo: any) => {
                                        const slot =
                                            slotInfo.time;

                                        const isSelected =
                                            selectedSlot === slot;

                                        const isFull =
                                            !slotInfo.isAvailable ||
                                            slotInfo.availableSeats <
                                                Number(
                                                    selectedGuests
                                                );

                                        return (
                                            <button
                                                key={slot}
                                                type="button"
                                                disabled={isFull}
                                                onClick={() =>
                                                    setSelectedSlot(
                                                        slot
                                                    )
                                                }
                                                className={`
                                                    relative
                                                    py-3
                                                    px-2
                                                    rounded-xl
                                                    text-[10px]
                                                    font-medium
                                                    tracking-wider
                                                    transition-all
                                                    duration-200
                                                    border

                                                    ${
                                                        isSelected
                                                            ? "bg-[#171717] border-[#171717] text-white shadow-md"
                                                            : isFull
                                                            ? "bg-black/[0.025] border-black/[0.05] text-black/20 cursor-not-allowed"
                                                            : "bg-[#faf9f6] border-black/[0.09] text-black/55 hover:border-[#9a7628] hover:text-[#80621f] hover:bg-[#9a7628]/5 cursor-pointer"
                                                    }
                                                `}
                                            >
                                                {slot}

                                                {isFull && (
                                                    <span className="
                                                        block
                                                        text-[7px]
                                                        text-red-400
                                                        uppercase
                                                        mt-1
                                                    ">
                                                        Full
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    });
                            })()
                        )}
                    </div>
                </div>

                {/* CTA */}
                <button
                    onClick={handleReserveClick}
                    className="
                        group
                        w-full
                        flex
                        items-center
                        justify-center
                        gap-3
                        bg-[#171717]
                        hover:bg-[#80621f]
                        text-white
                        py-4
                        mt-3
                        rounded-xl
                        text-[10px]
                        font-medium
                        tracking-[0.2em]
                        uppercase
                        transition-all
                        duration-300
                        cursor-pointer
                    "
                >
                    {isAuthenticated
                        ? "Reserve your table"
                        : "Login to reserve"}

                    <span className="
                        text-base
                        leading-none
                        group-hover:translate-x-1
                        transition-transform
                    ">
                        →
                    </span>
                </button>

                {/* Trust */}
                <div className="
                    pt-4
                    border-t
                    border-black/[0.07]
                    flex
                    items-start
                    gap-3
                ">
                    <ShieldCheck
                        size={15}
                        className="
                            text-[#9a7628]
                            mt-0.5
                            shrink-0
                        "
                    />

                    <p className="
                        text-[9px]
                        text-black/40
                        leading-relaxed
                    ">
                        No reservation fee. Cancel for free up to
                        24 hours prior to your reservation.
                    </p>
                </div>
            </div>
        </div>
    );
}