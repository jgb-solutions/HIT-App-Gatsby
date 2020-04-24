import React from 'react'
import { graphql } from 'gatsby'

import NewsInterface from '../interfaces/NewsInterface'
import MainLayout from '../components/layouts/Main'

// import NewsInterface from '../interfaces/NewsInterface'
// import useAllNews from '../hooks/useAllNews'
// import SEO from '../components/SEO'

const AllNews: React.FC = ({ data }) => {
  // const ionInfiniteScrollRef = React.createRef<HTMLIonInfiniteScrollElement>()
  // const { data, loading, error, hasMore, loadMore } = useAllNews()

  // if (data.length === 0) return <IonLoading
  //   isOpen={loading}
  //   message={`Patientez s'il vous plaît...`}
  // />

  // if (error) return <p>Error!</p>

  return (
    <MainLayout>

      {/* {data.allRestApiApiNews.nodes[0].data.map((news: NewsInterface) => (
                <IonCol key={news.hash} size="12" sizeSm="4" sizeXl="3">
                  <IonCard routerLink={`/n/${news.hash}`}>
                    <img src={news?.image_url || 'https://files.infotoutan.com/images/03kpJg2M2zsaY3GmdRUn50OKQfua2p84ETrg2L3V.jpeg'} alt={news?.title} />
                    <IonCardHeader>
                      <IonCardSubtitle>{news.public_date}</IonCardSubtitle>
                      <IonCardTitle>{news.title}</IonCardTitle>
                    </IonCardHeader>
                  </IonCard>
                </IonCol>
              ))} */}
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
