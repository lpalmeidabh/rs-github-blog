import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

export const PostContainer = styled.div`
  width: 100%;
  max-width: 864px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

export const PostHeader = styled.div`
  border-radius: 6px;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  margin-top: -5.5rem;
`

export const PostLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`

export const PostTitle = styled.span`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: bold;
`

export const PostInfo = styled.div`
  padding-top: 1.5rem;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`

export const PostInfoItem = styled.div`
  display: flex;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-span']};

  svg {
    color: ${(props) => props.theme['base-label']};
  }
`

export const PostBody = styled(ReactMarkdown)`
  margin-top: 2.5rem;
  color: ${(props) => props.theme['base-text']};
`
