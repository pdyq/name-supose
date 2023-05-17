import {
  HARD_MODE_DESCRIPTION,
  HIGH_CONTRAST_MODE_DESCRIPTION,
} from '../../constants/strings'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="muta" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex flex-col divide-y">
        <SettingsToggle
          settingName="duro-moda"
          flag={isHardMode}
          handleFlag={handleHardMode}
          description={HARD_MODE_DESCRIPTION}
        />
        <SettingsToggle
          settingName="kali-moda"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="mega-ota-kolo-moda"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
          description={HIGH_CONTRAST_MODE_DESCRIPTION}
        />
      </div>
    </BaseModal>
  )
}
