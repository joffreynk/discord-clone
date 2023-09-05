import { dbConnection } from '@/lib/dbConnection';
import { findAndCreateProfile } from '@/lib/serverActions/profileActions'

export default async function SetUpPage() {
  const profile = await findAndCreateProfile();

  const server = await dbConnection.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id
        }
      }
    }
  })
  return (
    <div>
      <h1>create a user</h1>
    </div>
  )
}


