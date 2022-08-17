import styled from 'styled-components'

export const IssuesContainer = styled.main`
  width: 100%;
  max-width: 864px;

  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
export const IssueList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`

// interface PriceHighlightProps {
//   variant: 'income' | 'outcome'
// }

// export const PriceHighlight = styled.span<PriceHighlightProps>`
//   color: ${(props) =>
//     props.variant === 'income'
//       ? props.theme['green-300']
//       : props.theme['red-300']};
// `
