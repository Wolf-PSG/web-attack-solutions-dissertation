import React, { useEffect, useState } from 'react';
import Layout from '../../components/contentLayout/layout';
const Content = ({ props }) => {
    const [content, setContent] = useState({});
    useEffect(() => {
        const content_xss = {
            subtitle: 'Preventing Cross-Site Scripting',
            desc:
                'Cross-Site Scripting is a type of injection attack, which aims to inject malicious scripts inside a website',
            desc_2:
                "Generally the attacker would inject to script into an unprotected form. These attacks are most successful on sites which don't validate user inputs.",
            desc_3:
                "These attacks can affect unsuspecting users because that user's browser has no way of checking if the script should be trusted which can then give the script access to cookies and session tokens and be able to take sensitive information from the victims",
        };
        const content_data_san = {
            subtitle: 'Clean your data',
            desc:
                'Data Sanitization is the act of cleaning and filtering user inputs into your website/application',
            desc_2:
                'Ensuring sanitized data is important as it can prevent injection attacks into your site and to prevent unwanted inputs going into your backend and database.',
            list: 'Data sanitization can be done in multiple ways:',
            list_el: [
                {
                    Masking: [
                        'Input masking controls what is entered into form fields. As well as insuring you a using corrects types for your html tags (ie, <input type="number"/> ) ',
                        'You can create a mask for phone numbers by adding a data-mask field to the tag and add ####-####, these hashes mean that only numbers between 0-9 can be entered and that there will be a dash after 4 numbers',
                        'then using javascript you can implement a method of checking the input field against the datamask as shown below',
                    ],
                    code: '',
                },
                {
                    input_validation: [
                        'Input validation is making sure that javascript you are using to handle the form data is checking that the data the user has inputed is valid and is what the backend expects.',
                        'This should also be done on the backend as well.',
                    ],
                    code: '',
                },
                {
                    escaping: [
                        'Escaping is converting the user input before the data is sent to the backend and database.',
                        'Most modern frameworks and view engines do this out of the box, however pure html does not which is how the previous xss section worked.',
                    ],
                    code: '',
                },
            ],
        };
        const content_rate_limit = {
            subtitle: 'limit the request size',
            desc: 'This is a securtiy measurment to prevent DDOS attacks.',
            desc_2:
                'This method is to to reducing the amount of requests a user can do within a given time.',
            desc_3:
                'Without proper rate limiting malicious users can potentially send hundreds of thousands of request to your server which could overload it can take it down',
            list: 'rate limiting can be done in these ways:',
            list_el: [
                {
                    libraries: [
                        'There are many libraries/packages avalible for almost every language.',
                        'Laravel has built in functionality, Nodejs + Express have a npm package called "express-rate-limit" and Python has a Pypi Library called "ratelimit" etc',
                        "It is recommeneded to use a framework when creating a backend server as alot of securtiy functioanlity are backed into the framework and with the sheer amount of support provided within the framework's community, development should go smoothly as well.",
                    ],
                },
            ],
        };

        const content_ddos = {
            subtitle: "don't get denied",
            desc:
                'Distributed Denial of Service attacks is act of disrupting the functionality and traffic of a targeted server and site. ',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            list: 'Ways of prevent a potential DDOS attack',
            list_el: [
                {
                    CDN:
                        ['Content distribution networks such as Cloudflare, Google Cloud & Amazon Cloudfront etc are a great way of protectin your site/service from potential DDos Attacks as well as SQL injections. These platforms are not for hosting they rather point to your host and are able to cache files and handle traffic allowing for faster experience and performance for the user.'],
                },
                {
                    PaaS:
                        ['Platforms as a service are genrally cloud based infrasturces that levarage the cloud that can support you in a multitude of ways from hosting (netlify, heroku), file storage (AWS, Azure, GCP), mailing (Sendgrid) and Websockets (Pusher) etc . These platforms tend to be robust and can help reduce the load on your own server'],
                },
            ],
        };
        const content_SQL = {
            subtitle: 'Someone is dropping tables!',
            desc: 'Using databases',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
            list: 'How to protect yourself from SQL injections',
            list_el: [{}],
        };
        switch (props) {
            case 'xss':
                setContent({ ...content_xss });
                break;
            case 'data sanitisation':
                setContent({ ...content_data_san });
                break;
            case 'rate limiting':
                setContent({ ...content_rate_limit });
                break;
            case 'ddos':
                setContent({ ...content_ddos });
                break;
            case 'sql injection':
                setContent({ ...content_SQL });
                break;
            default:
                setContent({});
        }
        // return () => {
        //     cleanup
        // }
    }, [props]);
    return (
        <div className="content-container">
            <Layout {...content} />
        </div>
    );
};

export default Content;
