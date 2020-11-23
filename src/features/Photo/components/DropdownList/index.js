import React from 'react';
import Select from 'react-select';

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

export default () => (
  <Select
    defaultValue={""}
    isMulti
    name="categoryId"
    options={PHOTO_CATEGORY_OPTIONS}
    className="basic-multi-select"
    classNamePrefix="select"
  />
);
