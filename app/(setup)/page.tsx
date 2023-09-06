import CreateServer from '@/components/forms/CreateServer';
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
      <CreateServer />
    </div>
  )
}


