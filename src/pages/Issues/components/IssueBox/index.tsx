import { NavLink } from 'react-router-dom'
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
            <NavLink to={''}> {title}</NavLink>
          </IssueTitle>
          <IssueDate>{date}</IssueDate>
        </IssueBoxHeader>
        <IssueDescription>{description} ...</IssueDescription>
      </IssueBoxContent>
    </IssueBoxContainer>
  )
}
