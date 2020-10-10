import React from 'react';

import { Container } from './styles';

import { ModelsWrapper, ModelSection } from '../Model';
import DefaultOverlayContent from '../DefaultOverlayContent';

const Page: React.FC = () => {
  return (
    <Container>
      
      <ModelsWrapper>

        <div>

          <ModelSection
            modelName="Model One"
            overlayNode={
              <DefaultOverlayContent
                label="Model One"
                description="Order Online for Delivery"
              />
            }
          />

        </div>

      </ModelsWrapper>

    </Container>
  );
};

export default Page;
