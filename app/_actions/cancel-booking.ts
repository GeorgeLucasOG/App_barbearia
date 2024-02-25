"use server";

import { revalidatePath } from "next/cache";
import { db } from "../_lib/prisma";

export const cancelBooking = async (bookingId: string) => {
    await db.booking.delete({
        where: {
            id: bookingId,
        },
    });

    // método revalida a página, atualize e esvazia o cache
    revalidatePath("/");
    revalidatePath("/bookings");
};