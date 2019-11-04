import React from 'react'
import { Card, Container } from 'semantic-ui-react'
import {activities} from './ActivitiesData'
import ActivityCard from './ActivityCard'

const Activities = () => {
    return (
        <>
          <Container className="activitiesCards">
              <div className="massive center">
                Our work makes a difference
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <Card.Group itemsPerRow={2}>
                  {activities.map(activity =>
                      <ActivityCard
                        key={activity.id} {...activity} padding="20px"/>
                      )}
              </Card.Group>
          </Container>
          <br/>
          <br/>
        </>
    )
}

export default Activities
