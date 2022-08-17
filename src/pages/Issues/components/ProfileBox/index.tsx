import {
  ProfileBoxContainer,
  ProfileBoxContent,
  ProfileImage,
  ProfileInfo,
  ProfileHeader,
  ProfileName,
  ProfileUrl,
  ProfileAbout,
  ProfileExtra,
  ProfileExtraItem,
} from './styles'
import { GithubLogo, Buildings, Person } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface Profile {
  id: number
  avatar_url: string
  login: string
  name: string
  followers: number
  company: string
  bio: string
  url: string
}

export function ProfileBox() {
  const [profile, setProfile] = useState<Profile>({})
  async function fetchProfile() {
    const response = await api.get('users/lpalmeidabh')
    setProfile(response.data)
  }
  useEffect(() => {
    fetchProfile()
  })
  return (
    <ProfileBoxContainer>
      <ProfileBoxContent>
        <ProfileImage src={profile.avatar_url} alt={profile.name} />
        <ProfileInfo>
          <ProfileHeader>
            <ProfileName>{profile.name}</ProfileName>
            <ProfileUrl href={profile.url} />
          </ProfileHeader>
          <ProfileAbout>{profile.bio}</ProfileAbout>
          <ProfileExtra>
            <ProfileExtraItem>
              <GithubLogo size={24} />
              {profile.login}
            </ProfileExtraItem>
            <ProfileExtraItem>
              <Buildings size={24} />
              {profile.company}
            </ProfileExtraItem>
            <ProfileExtraItem>
              <Person size={24} />
              {profile.followers} seguidores
            </ProfileExtraItem>
          </ProfileExtra>
        </ProfileInfo>
      </ProfileBoxContent>
    </ProfileBoxContainer>
  )
}
