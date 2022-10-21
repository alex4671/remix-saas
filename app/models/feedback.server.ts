import type {Feedback} from "@prisma/client";
import {prisma} from "~/server/db.server";

export const saveFeedback = (userId: Feedback['userId'], userEmail: Feedback['userEmail'], feedback: Feedback["feedback"]) => {
  return prisma.feedback.create({
    data: {
      userId,
      userEmail,
      feedback,
    }
  })
}
