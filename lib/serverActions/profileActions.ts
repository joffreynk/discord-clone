'use server';

import { currentUser, redirectToSignIn } from "@clerk/nextjs"
import { dbConnection } from "@/lib/dbConnection";

export const findAndCreateProfile = async()=> {
  const user = await currentUser();

  if(!user) return redirectToSignIn();


  const profile = await dbConnection.profile.findUnique({
    where: {
      userId: user.id
    }
  });

  if(profile) return profile;

  const newProfile = await dbConnection.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  });

  return newProfile;
}