import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaCheckCircle } from "react-icons/fa"
import "./index.css"

import Sidebar from "../components/sidebar/Sidebar"
import TechTag from "../components/tags/TechTag"

const AboutPage = (props) => {
    const labels = props.data.site.siteMetadata.labels
    const aboutTags = ["react", "nodejs", "html", "css", "ionic", "laravel", "javascript", "java", "php", "spring", "git", "angular"]
    const tags = {}
    labels.forEach(label => {
        aboutTags.forEach(tag => {
            if (tag === label.tag) {
                tags[tag] = label.name
            }
        })
    })

    return (
        <Layout>
            <SEO title="About" />
            <div className="post-page-main">
                <div className="sidebar px-4 py-2">
                    <Sidebar />
                </div>

                <div className="post-main">
                    <SEO title="About" />
                    <div className="mt-3">
                        <h2 className="heading">Sobre Mim</h2>
                        <p><i>Líder da equipe de desenvolvivmento de sistemas web e mobile na PD Case LTDA. / TJMA com mais 12 anos de experiência, youtuber e entusiasta de tecnologia. Meu objetivo aqui é te mostrar tudo sobre o maravilhoso mundo do desenvolvimento de sistemas computacionais e ajudar a todos que queiram trabalhar com T.I.</i></p>
                        <br />
                        <h4>Formação</h4>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Mestrado em Ciência da Computação na Universidade Federal do Maranhão, Brasil</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">MBA em Gestão de Negócios e Inovação na Faculdade de Negócios Excellence, Brasil</p>
                        </div>
                        <div>
                            <span className="text-success d-inline-block" title="blazing">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">Bacharelado em Ciência da Computação na Universidade Federal do Maranhão, Brasil</p>
                        </div>
                        <h4>Experiência Profissional</h4>
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">03.2011 - atualmente&nbsp;-&nbsp;<b>Analista/Desenvolvedor Senior</b> - PD Case Informatica Ltda, São Luís, Brasil</p>
                            <div className="ml-5">
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                                <TechTag tag="javascript" tech="Javascript" name={tags["javascript"]} size={20} color="yellow" />
                                <TechTag tag="java" tech="Java" name={tags["java"]} size={20} color="wheat" />
                                <TechTag tag="php" tech="php" name={tags["php"]} size={20} color="violet" />
                                <TechTag tag="ionic" tech="Ionic" name={tags["ionic"]} size={20} color="blue" />
                                <TechTag tag="angular" tech="Angular" name={tags["angular"]} size={20} color="red" />
                                <TechTag tag="react" tech="React" name={tags["react"]} size={20} color="deepskyblue" />
                                <TechTag tag="nodejs" tech="Node.js" name={tags["nodejs"]} size={20} color="lightgreen" />
                                <TechTag tag="spring" tech="Spring" name={tags["spring"]} size={20} color="green" />
                                <TechTag tag="laravel" tech="Laravel" name={tags["laravel"]} size={20} color="red" />
                                <TechTag tag="git" tech="Git" name={tags["git"]} size={20} color="white" />
                            </div>  
                        </div>
                        <br />
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">07.2014 - 02.2020&nbsp;-&nbsp;<b>Professor</b> - UNDB Centro Universitário, São Luís, Brasil</p> 
                        </div>
                        <br />
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">11.2009 - 03.2011&nbsp;-&nbsp;<b>Desenvolvedor de Sistemas</b> - Shap Consult, São Luís, Brasil</p>
                            <div className="ml-5">
                                <TechTag tag="java" tech="Java" name={tags["java"]} size={20} color="wheat" />
                                <TechTag tag="php" tech="php" name={tags["php"]} size={20} color="violet" />
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                                <TechTag tag="javascript" tech="Javascript" name={tags["javascript"]} size={20} color="yellow" />
                            </div>  
                        </div>
                        <br />
                        <div>
                            <span className="text-success d-inline-block" title="tags">
                                <FaCheckCircle size={26} style={{ color: "success" }} />
                            </span>
                            <p className="d-inline-block ml-3 w-75 align-top">01.2007 - 08.2009&nbsp;-&nbsp;<b>Programador</b> - Intertech, São Luís, Brasil</p>
                            <div className="ml-5">
                                <TechTag tag="php" tech="php" name={tags["php"]} size={20} color="violet" />
                                <TechTag tag="html" tech="HTML" name={tags["html"]} size={20} color="darkorange" />
                                <TechTag tag="css" tech="CSS" name={tags["css"]} size={20} color="teal" />
                                <TechTag tag="javascript" tech="Javascript" name={tags["javascript"]} size={20} color="yellow" />
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query aboutQuery {
        site {
            siteMetadata {
                labels {
                    tag
                    tech 
                    name 
                    size 
                    color
                }
            }
        }
    }
`

export default AboutPage

