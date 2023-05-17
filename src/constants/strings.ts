export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['bon laboro!', 'bravo!', 'mui bon!']
export const GAME_COPIED_MESSAGE = 'tu i mime go tu clipboard a liga go ludi'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'tu i no fini note name'
export const WORD_NOT_FOUND_MESSAGE = 'a no name'
export const HARD_MODE_ALERT_MESSAGE =
  'tu i kan ato-begin a duro-mode se tu i no ave begin'
export const HARD_MODE_DESCRIPTION =
  'tu i debe uti a ale sujest en sige-supose'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'i make kolo ma fasile go man ke i ave no bon mira'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `name i de ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `i debe uti ${guess} en loke ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `supose i debe en ${letter}`
export const ENTER_TEXT = 'supose'
export const DELETE_TEXT = 'erase uno litera'
export const STATISTICS_TITLE = 'info-matemati'
export const GUESS_DISTRIBUTION_TEXT = 'tu i supose o vere e en ke?'
export const NEW_WORD_TEXT = 'nu name afa'
export const SHARE_TEXT = 'dire go man'
export const SHARE_FAILURE_TEXT =
  'tu i no kan dire e go man a tu efeto. tu i kan make si o solo ven tu i go di neto-loke sekura, en some u ale neto-mira-uti ke mi i apojo.'
export const MIGRATE_BUTTON_TEXT = 'i pota go ota makina'
export const MIGRATE_DESCRIPTION_TEXT =
  'i puse di go-i pota tu info-matemati go nu makina.'
export const TOTAL_TRIES_TEXT = 'suma tenta'
export const SUCCESS_RATE_TEXT = 'vere ratio'
export const CURRENT_STREAK_TEXT = 'tempo ke i kipa supose o vere nun'
export const BEST_STREAK_TEXT = 'da ma bon tempo ke i kipa supose o vere'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "tu i uti a dipa-radika neto-mira-uti. mebi a duro ven tu i dire e go man a efeto u i sava a efeto. mi sujesi a tu go-i uti orijen neto-mira-uti de tu makina."

export const DATEPICKER_TITLE = 'i eleti a pasa dia'
export const DATEPICKER_CHOOSE_TEXT = 'i eleti'
export const DATEPICKER_TODAY_TEXT = 'di-dia'
export const ARCHIVE_GAMEDATE_TEXT = 'dia de ludi'
