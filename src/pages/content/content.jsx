import React, { useEffect, useState } from 'react';
import Layout from '../../components/contentLayout/layout';
const Content = ({ props }) => {
    const [content, setContent] = useState({});
    console.log(props);
    useEffect(() => {
        const content_xss = {
            subtitle: 'Preventing Cross-Site Scripting',
            desc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        };
        const content_data_san = {
            subtitle: 'Ensure your data is sanitized',
            desc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        };
        const content_rate_limit = {
            subtitle: 'limit the request size',
            desc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        };

        const content_ddos = {
            subtitle: "don't get denied",
            desc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
        };
        const content_SQL = {
            subtitle: 'Someone is dropping tables!',
            desc:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            desc_2:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            desc_3:
                'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
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
