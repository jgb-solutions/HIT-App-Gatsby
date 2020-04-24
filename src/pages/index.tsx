import React from 'react'
import { graphql } from 'gatsby'
import Grid from '@material-ui/core/Grid'
import InfiniteScroll from 'react-infinite-scroller'


import NewsInterface from '../interfaces/NewsInterface'
import MainLayout from '../components/layouts/Main'
import NewsCard from '../components/NewsCard'
import useAllNews from '../hooks/useAllNews'

// import NewsInterface from '../interfaces/NewsInterface'
// import useAllNews from '../hooks/useAllNews'
// import SEO from '../components/SEO'

const AllNews: React.FC = ({ data }: any) => {
  const { data: newsData, loading, error, hasMore, loadMore } = useAllNews(data.allRestApiApiNews.nodes[0].data)

  return (
    <MainLayout>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadMore}
        hasMore={hasMore}
        // loader={<Spinner key={1} />}
        useWindow={false}
      >
        <Grid container spacing={2}>
          {newsData.map((news: NewsInterface) => (
            <Grid item md={3} sm={4} xs={12} key={news.hash}>
              <NewsCard news={news} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </MainLayout>
  )
}

export const query = graphql`
  query HomePageQuery {
    allRestApiApiNews {
    nodes {
      current_page
      last_page
      data {
        title
        public_date
        image_url
        hash
      }
    }
  }
  }
`

export default AllNews
