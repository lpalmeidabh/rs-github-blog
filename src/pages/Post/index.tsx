import { Balloon, Calendar, GithubLogo } from 'phosphor-react'
import { useState, useEffect } from 'react'

import remarkGfm from 'remark-gfm'
import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { formatDate } from '../../utils/formatter'
import {
  PostContainer,
  PostHeader,
  PostLinks,
  PostTitle,
  PostInfo,
  PostInfoItem,
  PostBody,
} from './styles'

interface Issue {
  html_url: string
  title: string
  user: {
    login: string
  }
  comments: number
  created_at: string
  body: string
}

export function Post() {
  const { number } = useParams()
  console.log(number)
  const [issue, setIssue] = useState<Issue>({} as Issue)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchIssue() {
      const response = await api.get(
        `/repos/lpalmeidabh/rs-github-blog/issues/${number}`,
      )

      setIssue(response.data)
      setIsLoading(false)
    }
    fetchIssue()
  }, [number])

  if (!isLoading)
    return (
      <PostContainer>
        <PostHeader>
          <PostLinks>
            <NavLink to={'/'}>{'< Voltar'}</NavLink>
            <a href={issue.html_url} target="_blank" rel="noreferrer">
              Ver no Github
            </a>
          </PostLinks>
          <PostTitle>{issue.title}</PostTitle>
          <PostInfo>
            <PostInfoItem>
              <GithubLogo size={24} />
              {issue.user.login}
            </PostInfoItem>
            <PostInfoItem>
              <Calendar size={24} />
              {formatDate(issue.created_at)}
            </PostInfoItem>
            <PostInfoItem>
              <Balloon size={24} />
              {issue.comments} comentários
            </PostInfoItem>
          </PostInfo>
        </PostHeader>

        <PostBody remarkPlugins={[remarkGfm]}>{issue.body}</PostBody>
      </PostContainer>
    )
}
