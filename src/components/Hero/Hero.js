import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello I am Mohamad <br />
        Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
        I am a Young Aspiring Developer that specializes in backend Technologies!
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </section>
);

export default Hero;