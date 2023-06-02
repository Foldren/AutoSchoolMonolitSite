from os import getcwd
from fastapi_mail import ConnectionConfig


MAIL_CONF = ConnectionConfig(
    MAIL_USERNAME="schoolselectavtoshkola@gmail.com",
    MAIL_PASSWORD="coeegulnrguxfrgb",
    MAIL_FROM="schoolselectavtoshkola@gmail.com",
    MAIL_PORT=587,
    MAIL_SERVER="smtp.gmail.com",
    MAIL_FROM_NAME="Уведомления SchoolSelect",
    MAIL_STARTTLS=True,
    MAIL_SSL_TLS=False,
)
IS_LOCAL = "Pycharm" in getcwd()
STATIC_DIR = '/source/static' if IS_LOCAL else '//schoolselect.ru/source/static'
