import React from 'react';
import { useAttackState } from '../../context/attackStore';
import Content from '../content/content';
import './zone.style.scss';
import CodePreview from '../../components/codePreview/codePreview.component';
const Zone = () => {
    const { attack } = useAttackState();
    return (
        <div className="zone">
            <h1> {attack ?? 'Click a tab to learn more'} </h1>
            {attack ? (
                <div>
                    <Content props={attack} />
                    <h3> Without Protection </h3>
                    <CodePreview className="codePreviewFail" props={attack} />
                    <h3> With Protection </h3>
                    <CodePreview
                        className="codePreviewSuccess"
                        props={attack}
                    />
                </div>
            ) : (
                <div />
            )}
        </div>
    );
};

export default Zone;
