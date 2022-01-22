import React from 'react';

import MenuTypesDesktop from './MenuTypesDesktop';
import MenuTypesMobile from './MenuTypesMobile';

const MenuTypes = (props) => {
  return (
    <>
      <MenuTypesDesktop {...props} />
      <MenuTypesMobile {...props} />
    </>
  );
};

export default MenuTypes;
