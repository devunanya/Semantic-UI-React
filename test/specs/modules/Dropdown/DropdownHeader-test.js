import DropdownHeader from 'src/modules/Dropdown/DropdownHeader'
import * as common from 'test/specs/commonTests'

describe('DropdownHeader', () => {
  common.isConformant(DropdownHeader)
  common.rendersChildren(DropdownHeader)
  common.implementsCreateMethod(DropdownHeader)
  common.implementsIconProp(DropdownHeader)
})
