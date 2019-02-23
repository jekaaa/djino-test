/* Block text */
const DEFAULT_TEXT = 'Загрузить скан страницы с фотографией'
const DOWNLOAD_TEXT = 'Файл загружен'
const SUCCESS_TEXT = 'Страница с пропиской'

/* Block icon class */
const DOWNLOAD_ICON = 'download__icon'
const WAIT_ICON = 'wait__icon'
const PRELOADER_ICON = 'preloader__icon'
const SUCCESS_ICON = 'success__icon'

/* Block status */
const SUCCESS_STATUS = { text: 'Проверено', className: 'status__success' }
const WAIT_STATUS = { text: 'Идет проверка', className: 'status__ghost' }
const ERROR_STATUS = { text: 'Отклонено', className: 'status__error' }

/* Text */
const SIZE_TEXT = 'Размер файла не более 5Мб'

export { 
    DEFAULT_TEXT, 
    DOWNLOAD_TEXT, 
    SUCCESS_TEXT, 
    DOWNLOAD_ICON, 
    PRELOADER_ICON, 
    WAIT_ICON, 
    SUCCESS_ICON,
    SUCCESS_STATUS,
    WAIT_STATUS,
    ERROR_STATUS,
    SIZE_TEXT
}