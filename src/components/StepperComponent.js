import React from 'react';
import './StepperComponent.scss';

const StepperComponent = ({ steps, setSteps }) => {
    return (
        <div className="StepperComponent">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    {index !== 0 && <div className="Line"></div>}
                    <div className={`Step ${step === null ? 'null' : step ? 'true' : 'false'}`} data-testid="step"></div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default StepperComponent;