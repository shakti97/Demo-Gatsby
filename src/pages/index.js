import React from "react"
import About from './about.js';
import Contact from './Contact';
import Layout from '../Components/Layout';
export default () => 
            <Layout>
                <div style={{color : 'red'}}>Hello Gatsby!</div>
                <p>Makes the development Faster</p>
                <img src="https://cdn-images-1.medium.com/max/1000/1*G9aVAI3aezHLw_JsiCfB1Q.jpeg" alt="Gatsby"/>
                <About/>
                <Contact mobileNumber='987GatsBy98'/>
            </Layout>