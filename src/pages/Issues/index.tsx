import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { IssueBox } from './components/IssueBox'
import { ProfileBox } from './components/ProfileBox'
import { IssuesContainer, IssueList } from './styles'

interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}
export function Issues() {
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchIssues(query = '') {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query}repo:lpalmeidabh/rs-github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  return (
    <IssuesContainer>
      <ProfileBox />
      <IssueList>
        {issues.map((issue) => {
          return (
            <IssueBox
              key={issue.number}
              number={issue.number}
              title={issue.title}
              description={issue.body}
              date={issue.created_at}
            />
          )
        })}
      </IssueList>
    </IssuesContainer>
  )
}
