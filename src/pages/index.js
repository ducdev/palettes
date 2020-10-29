import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

const PaletteList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ul {
    list-style-type: none;
  }
`

export default function Index({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data

  return (
    <>
      <h1>Palettes</h1>
      <PaletteList>
        {
          allMarkdownRemark.nodes.map(({frontmatter: { id, liked, colors}}) => (
            <ul key={id}>
              {
                colors.map(color => (
                  <li key={color}>
                    {`#${color}`}
                  </li>
                ))
              }
              <span>Liked: {liked}</span>
            </ul>
          ))
        }
      </PaletteList>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          id
          colors
          liked
        }
      }
    }
  }
`