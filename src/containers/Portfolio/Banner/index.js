import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-icons-kit';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import SocialProfile from '../SocialProfile';
import BannerWrapper from './banner.style';

import { SOCIAL_PROFILES, BANNER } from 'common/data/Portfolio/data';
import { cornerDownRight } from 'react-icons-kit/feather/cornerDownRight';

const BannerSection = ({
  row,
  contentArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading content={BANNER.greeting} {...greetingStyle} />
            <Heading content={BANNER.name} {...nameStyle} />
            <Heading content={BANNER.designation} {...designationStyle} />
            <Box {...roleWrapper}>
              <Icon
                icon={cornerDownRight}
                style={{ color: '#3444f1' }}
                size={22}
              />
              <Heading content={BANNER.role} {...roleStyle} />
            </Box>
            <Text content={BANNER.about} {...aboutStyle} />
            <SocialProfile items={SOCIAL_PROFILES} />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentArea: {
    width: '100%',
    maxWidth: '800px',
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '80px 0 60px 0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px',
    textAlign: 'center',
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px',
    textAlign: 'center',
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px'],
    textAlign: 'center',
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px',
    justifyContent: 'center',
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px',
    textAlign: 'center',
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px',
    textAlign: 'center',
  },
};

export default BannerSection;
