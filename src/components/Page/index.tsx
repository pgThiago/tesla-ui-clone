import React from 'react';

import { Container } from './styles';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';
import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <Container>
      
      <ModelsWrapper>

        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelSection
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}

        </div>

        <UniqueOverlay />

      </ModelsWrapper>

    </Container>
  );
};

export default Page;
