import React from "react";
import styled from 'styled-components'

const Wrapper = styled.div`
  width : 85%;
  margin : 0 auto;
  max-width : 100rem;
  h2{
    padding-bottom: 0px;
  }
  p{
    line-height: 14px ;
    font-size: px;
    opacity : 0.8;
  }
`
const Overview = () => {
  return (
    <Wrapper>
      <h2>Overview</h2>
      <p>
        The modern SK Hotel, Lagos, sits on the banks
        of the upscale Victoria Island in beautiful Lagos Lagoon. From here,
        guests enjoy scenic views of the up-and-coming city. Lagos is one of the
        fastest growing cities in the world, and a major financial center in
        Africa, which makes this affluent mega-city a top destination for both
        business and leisure travelers, with sites and attractions to suit all
        needs. 
        </p>
        <h2>Location</h2>
        <p>Central location in Lagos Business guests appreciate the hotel's
        proximity to corporate headquarters, banking districts and consulates,
        while leisure guests enjoy quick access to several shopping malls and
        top Lagos attractions such as the Bar Beach, just 5 minutes from the
        hotel Scandinavian design & luxe amenities Our hotel features 170 rooms
        and suites, all styled by Swedish designer Christian Lundwall. 
        </p>
        <h2>Design</h2>
        <p> Amenities
        include free high-speed wireless Internet and air conditioning. Choose
        between international dishes or Nigerian cuisine at the on-site Voyage
        Restaurant or linger over a light meal on the terrace at Surface Bar &
        Grill. For a perfect end to the day, order a well-mixed drink at The
        View hotel bar. Our well-equipped fitness center makes it easy to
        maintain to your exercise regimen, while our wellness area invites
        guests to relax in the massage room, steam room and outdoor infinity
        pool. Planning a business event, wedding or other special occasion? We
        offer six flexible rooms that all come with state-of-the-art
        audio-visual equipment and splendid views over Lagos Lagoon.
      </p>
    </Wrapper>
  );
};

export default Overview;
