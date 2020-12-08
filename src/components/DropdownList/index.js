import React from 'react';
import Select from 'react-select';

import { PHOTO_CATEGORY_OPTIONS } from 'constants/global';

DropdownList.propTypes = {}

DropdownList.defaultProps = {
  categoryId: null
}

function DropdownList(props) {       
  const { filterChange } = props
  const handleFilterChange = (selectedCategoryValue) => {
    filterChange(selectedCategoryValue)
  }

  return (
    <Select
    isClearable
    defaultValue={""}
    name="categoryId"
    options={PHOTO_CATEGORY_OPTIONS}
    onChange={handleFilterChange}
    classNamePrefix="select"
  />
  )
}

export default DropdownList
