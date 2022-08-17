import styled from 'styled-components'

export const ProfileBoxContainer = styled.div`
  border-radius: 6px;

  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -8.5rem;
`

export const ProfileBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
`

export const ProfileImage = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ProfileName = styled.div`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
`

export const ProfileUrl = styled.div`
  color: ${(props) => props.theme.blue};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1.6;
`

export const ProfileAbout = styled.div`
  flex: 1;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-text']};
`

export const ProfileExtra = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

export const ProfileExtraItem = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-subtitle']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`
