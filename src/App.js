import React from "react";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";
// import Template from "./Components/Template";
import SideNav from "./Components/SideNav";
import StudioCard from "./Components/StudioCard";
import Disney from "./Images/Disney.png";
import disney from "./Videos/disney.mp4";
import { Sports, Studios } from "./Constants/Constants";
import SmallSlider from "./Components/SmallSlider";
import English from "./Images/Languages/English.png";
import { Languages } from "./Constants/Constants";
import { Genre } from "./Constants/Constants";
import Banner from "./Components/Banner"
import "boxicons";
import MovieCard from "./Components/MovieCard";
import { Latestrelease } from "./Constants/Constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SportsCard from"./Components/SportsCard";



const MainWrapper = styled.main``;

const ContentDiv = styled.div`
margin-top: -120px;
`;

const Title = styled.h2`
color: white;
font-size: 20px;
height: 40px;
margin-top: 10px;
`;

const Container = styled.div`
display: flex;
justify-content: space-between;
width: ${props => props.studio ? "1300px" : "100%"};
.swiper {
  overflow-y: visible;
  color: white;
}
.swiper-slide {
  position: none;
}
.swiper-button-next {
  width: 40px;
  height: 100%;
  top: 10px;
  right: 0px;
  &:hover {
    background: linear-gradient(269.25deg, #0f1014 0.62%,rgba(15,16,20,0)99.33%);
  }
}
.swiper-button-prev {
  width : 40px;
  height: 100%;
  top:10px;
  left: 0px;
  &:hover {
    background: linear-gradient(88deg, #0f1014 0.62%,rgba(15,16,20,0) 99.33%);
  }
  }
.swiper-backface-hidden{
  transform:none;
  backface-visibility: visible;
}
  --swiper-navigation-size: 20px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color:#fff;
  --swiper-theme-color:#fff;
  `;

const Section = styled.div`
position: relative;
margin: 20px 0 50 0px ;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Template/> */}
      <SideNav />
      <Banner />
      <MainWrapper>
        <ContentDiv>
          <Section>
            <Title>
              Latest Release
            </Title>
            <Container>
              {/* <MovieCard></MovieCard> */}
              {
                Latestrelease.map((item) => {
                  return (
                    <>
                      <MovieCard
                        cover={item.image}
                        top={item.Hover}
                        logo={item.logo}
                        year={item.year}
                        seasons={item.seasons}
                        availableIn={item.availableIn}
                        ratings={item.ratings}
                        desc={item.description} />
                    </>
                  );
                })
              }
            </Container>
          </Section>

          <Section>
            <Title>
              Sports
            </Title>
            <Container>
              {
                Sports.map((item) => {
                  return (
                    <>
                      <SportsCard
                        cover={item.image}
                        name={item.title}
                        top={item.image}
                        desc={item.description}
                        duration={item.duration}
                        />
                    </>
                  );
                })
              }
            </Container>
          </Section>
          <Section>
            <Container studio>
              {Studios.map((item) => {
                return (
                  <>
                    <StudioCard image={item.image} video={item.video} />
                  </>
                );
              })}
            </Container>
          </Section>
          <Section>
            <Title>
              Popular languages
            </Title>
            <Container>
              <Swiper
                direction="horizontal"
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation
              >
                {Languages.map((item) => {
                  return (
                    <>
                      <SwiperSlide>
                        <SmallSlider image={item.image} ></SmallSlider>
                      </SwiperSlide>
                    </>
                  );
                }
                )}
              </Swiper>
            </Container>
          </Section>

          <Section>
            <Title>
              Popular Genres
            </Title>
            <Container>
              <Swiper
                direction="horizontal"
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation
              >
                {Genre.map((item) => {
                  return (
                    <>
                      <SwiperSlide>
                        <SmallSlider image={item.image}></SmallSlider>
                      </SwiperSlide>

                    </>
                  );
                })}
              </Swiper>
            </Container>
          </Section>


        </ContentDiv>
      </MainWrapper>
    </>
  );
};
export default App;
