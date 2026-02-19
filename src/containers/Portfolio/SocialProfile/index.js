import React from 'react';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { mail } from 'react-icons-kit/feather/mail';
import { SocialProfileWrapper, SocialProfileItem } from './socialProfile.style';

const SocialProfile = ({ items, className, iconSize }) => {
  const addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return (
    <SocialProfileWrapper className={addAllClasses.join(' ')}>
      {items.map((item, index) => (
        <SocialProfileItem
          key={`social-item-${index}`}
          className="social_profile_item"
        >
          <Link href={item.url || '#'}>
            <Icon
              icon={item.icon || mail}
              size={iconSize || 22}
            />
          </Link>
        </SocialProfileItem>
      ))}
    </SocialProfileWrapper>
  );
};

export default SocialProfile;
