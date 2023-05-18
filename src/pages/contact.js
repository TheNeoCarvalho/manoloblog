import React from 'react'
import styled, { css } from 'styled-components'
import { Container, Row, Col } from 'react-awesome-styled-grid'
import siteConfig from '../../data/siteConfig'
import { withPrefix } from "gatsby"
import loadable from '@loadable/component'
import Hero from '../components/hero'
import SEO from '../components/SEO'
import Wrapper from '../components/wrapper'
import { Linkedin, GitHub, Instagram, Mail, Home } from 'react-feather';

const Layout = loadable(() => import('../components/layout'))

const Contact = ({ className, location }) => {
  const title = ""
  const { keywords, social } = siteConfig
  return (
    <Layout location={location}>
      <SEO
        title={title}
        keywords={keywords}
      />

      <Hero
        heroImg={withPrefix('/images/contact.jpg')}
        title={title}
      />

      <Wrapper className={className}>
            <Container className="page-content" fluid>
            <Row>
            <Col xs={4}>
              <img
                className='avatar'
                src={withPrefix(siteConfig.authorAvatar)}
                alt='Manoel Carvalho'
                          />
                <div className="name">
                    <span>@manolo</span>
                </div>
            </Col>
          </Row>
          <Row>
              <Col
                xs={6} md={4}
                key={1}
                align="justify"
                      >
                
                <div className="socials">
                    <a className="social github" href="https://github.com/theneocarvalho" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                            <span>Github</span>
                    </a>

                    <a className="social linkedin" href="https://linkedin.com/in/franciscomanoelcarvalho" target="_blank" rel="noopener noreferrer">
                        <Linkedin />
                        <span>LinkedIn</span>
                    </a>

                    <a className="social instagram" href="https://instagram.com/manolocarvalho" target="_blank" rel="noopener noreferrer">
                        <Instagram />
                        <span>Instagram</span>
                    </a>

                    <a className="social mail" href="mailto:manoelmecat@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Mail />
                        <span>Email</span>
                    </a>
                    
                    <a className="social home" href="https://manolodev.tech" target="_blank" rel="noopener noreferrer">
                        <Home />
                        <span>Site Pessoal</span>
                    </a>

                </div>

              </Col>
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  )
}

export default styled(Contact)`
  .page-content {
    max-width: 100%;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .avatar {
        position: relative;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        transition: 1s all;
    }
    .avatar:hover {
        transform: scale(1.05);
        transform: translateY(-5px);
        box-shadow: #232121 0px 0px 20px;
        }
    .avatar img {
        position: absolute;
        width: auto;
        height: 200px;
        left: -50px;
    }
    .name {
        color: #555;
        font-size: 1.5em;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .socials {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 400px;
        height: auto;
        padding: 10px 5px;
    }
    .social {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        width: 70%;
        height: 50px;
        border-radius: 8px;
        color: #fff;
        margin: 8px;
    }
    .socials span {
        padding-left: 15px;
    }
    .github {
        background-color: #232121;
        border: 1px solid #3c3c3c;
    }
    .linkedin {
        background-color: #0E76A8;
    }
    .instagram {
        background-image:linear-gradient(90deg, rgba(150,14,78,1) 0%, rgba(143,46,156,1) 35%, rgba(36,35,97,1) 100%);;
    }
    .home {
        background-color: #4b4b4b;
        color: #fff;
    }
    .mail {
        background-color: #7159c1;
        color: #fff;
    }
    .socials a {
        text-decoration: none;
        cursor: pointer;
        transition: 0.5s;
    }
    .socials a:hover {
        transform: scale(1.05);
        border: 2px solid rgb(201, 201, 201);
        transform: translateY(-5px);
        box-shadow: #232121 0px 0px 20px;
    }

`
