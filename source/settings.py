from os import getcwd
from fastapi_mail import ConnectionConfig


MAIL_CONF = ConnectionConfig(
    MAIL_USERNAME="schoolselectavtoshkola@gmail.com", #"Avtoshkolaselect@yandex.ru",
    MAIL_PASSWORD="coeegulnrguxfrgb", #"fszldwozgjhvukzf",
    MAIL_FROM="schoolselectavtoshkola@gmail.com", #"Avtoshkolaselect@yandex.ru",
    MAIL_PORT=465,
    MAIL_SERVER="smtp.gmail.com", #"smtp.yandex.ru",
    MAIL_FROM_NAME="schoolselect",
    MAIL_STARTTLS=False,
    MAIL_SSL_TLS=True,
)
IS_LOCAL = "Pycharm" in getcwd()
STATIC_DIR = '/source/static' if IS_LOCAL else '//schoolselect.ru/source/static'
