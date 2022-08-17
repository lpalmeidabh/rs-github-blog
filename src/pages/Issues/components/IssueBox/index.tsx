import { NavLink } from 'react-router-dom'
import { formatDate } from '../../../../utils/formatter'
import {
  IssueBoxContainer,
  IssueBoxContent,
  IssueBoxHeader,
  IssueTitle,
  IssueDate,
  IssueDescription,
} from './styles'

interface IssueBoxProps {
  id: number
  title: string
  date: string
  description: string
}
export function IssueBox({ id, title, date, description }: IssueBoxProps) {
  return (
    <IssueBoxContainer>
      <IssueBoxContent>
        <IssueBoxHeader>
          <IssueTitle>
            <NavLink to={`/post/${id}`}> {title}</NavLink>
          </IssueTitle>
          <IssueDate>{formatDate(date)}</IssueDate>
        </IssueBoxHeader>
        <IssueDescription>{description}</IssueDescription>
      </IssueBoxContent>
    </IssueBoxContainer>
  )
}
