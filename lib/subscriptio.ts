import { auth } from "@clerk/nextjs";

import prismadb from "./prismadb";

const DAT_IN_MS = 84_400_000;

export const checkSubscription = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  const userSUbscription = await prismadb.userSUbscription.findUnique({
    where: {
      userId: userId,
    },
    select: {
      stripeCurrentPeriodEnd: true,
      stripeCustomerId: true,
      stripePriceId: true,
      stripeSubscriptionId: true,
    },
  });

  if (!userSUbscription) {
    return false;
  }

  const isValid =
    userSUbscription.stripePriceId &&
    userSUbscription.stripeCurrentPeriodEnd?.getTime()! + DAT_IN_MS >
      Date.now();

  return !!isValid;
};
