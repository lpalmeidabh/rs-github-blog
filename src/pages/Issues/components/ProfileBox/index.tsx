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

export function ProfileBox() {
  return (
    <ProfileBoxContainer>
      <ProfileBoxContent>
        <ProfileImage src="http://github.com/lpalmeidabh.png" alt="" />
        <ProfileInfo>
          <ProfileHeader>
            <ProfileName>Lucas Almeida</ProfileName>
            <ProfileUrl>BLABLABLA</ProfileUrl>
          </ProfileHeader>
          <ProfileAbout>
            Lorem ipsum dolor sit amet... lorem ipsum dolor sit amet bla bla
            bla...
          </ProfileAbout>
          <ProfileExtra>
            <ProfileExtraItem>
              <GithubLogo size={24} /> lpalmeiadbh
            </ProfileExtraItem>
            <ProfileExtraItem>
              <Buildings size={24} />
              Emprego
            </ProfileExtraItem>
            <ProfileExtraItem>
              <Person size={24} />
              32 Seguidores
            </ProfileExtraItem>
          </ProfileExtra>
        </ProfileInfo>
      </ProfileBoxContent>
    </ProfileBoxContainer>
  )
}
