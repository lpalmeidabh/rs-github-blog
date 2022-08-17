import styled from 'styled-components'

export const IssueBoxContainer = styled.div`
  max-width: 26rem;
  max-height: 16.25rem;
  border-radius: 10px;
  background-color: ${(props) => props.theme['base-post']};
`

export const IssueBoxContent = styled.div`
  padding: 2rem;
`

export const IssueBoxHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const IssueTitle = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  line-height: 1.6;

  a {
    color: ${(props) => props.theme['base-title']};
    text-decoration: none;
    cursor: pointer;
  }
`

export const IssueDate = styled.span`
  color: ${(props) => props.theme['base-span']};
  font-size: 0.875rem;
`

export const IssueDescription = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-text']};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
